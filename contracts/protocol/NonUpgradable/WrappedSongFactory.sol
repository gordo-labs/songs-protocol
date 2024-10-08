// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import './WrappedSongSmartAccount.sol';
import './../Interfaces/IProtocolModule.sol';

contract WrappedSongFactory {
  IProtocolModule public protocolModule;
  mapping(address => address[]) public ownerWrappedSongs;

  // TODO: make sure to find another way for the frontend to get the 
  // wsTokenManagement address, to remove the wsTokenManagement parameter from the event
  event WrappedSongCreated(
    address indexed owner,
    address wrappedSongSmartAccount,
    address stablecoin,
    address wsTokenManagement
  );

  event WrappedSongCreatedWithMetadata(
    address indexed owner,
    address wrappedSongSmartAccount,
    string songURI,
    uint256 sharesAmount,
    string sharesURI
  );

  constructor(address _protocolModule) {
    protocolModule = IProtocolModule(_protocolModule);
  }

  /**
   * @dev Creates a new wrapped song.
   * @param _stablecoin The address of the stablecoin contract.
   * @return The address of the created WrappedSongSmartAccount.
   */
  function createWrappedSong(
    address _stablecoin
  ) public payable returns (address) {
    require(!protocolModule.paused(), 'Protocol is paused'); // Check if protocol is paused
    //TODO: Pay fee in stablecoins
    require(
      msg.value >= protocolModule.wrappedSongCreationFee(),
      'Insufficient creation fee'
    );
    // require(protocolModule.isValidToCreateWrappedSong(msg.sender), "Not valid to create Wrapped Song");

    // Create WrappedSongSmartAccount instance
    WrappedSongSmartAccount newWrappedSongSmartAccount = new WrappedSongSmartAccount(
        _stablecoin,
        msg.sender,
        address(protocolModule)
      );
    ownerWrappedSongs[msg.sender].push(address(newWrappedSongSmartAccount));
    // newWrappedSongSmartAccount.newWSTokenManagement
    emit WrappedSongCreated(
      msg.sender,
      address(newWrappedSongSmartAccount),
      _stablecoin,
      address(newWrappedSongSmartAccount.newWSTokenManagement())
    );

    return address(newWrappedSongSmartAccount);
  }

  /**
   * @dev Creates a new wrapped song with metadata.
   * @param _stablecoin The address of the stablecoin contract.
   * @param songURI The URI of the song metadata.
   * @param sharesAmount The amount of shares to be created.
   * @param sharesURI The URI containing metadata for the shares.
   */
  function createWrappedSongWithMetadata(
    address _stablecoin,
    string memory songURI,
    uint256 sharesAmount,
    string memory sharesURI
  ) public payable {
    require(!protocolModule.paused(), 'Protocol is paused'); // Check if protocol is paused
    address newWrappedSongSmartAccount = createWrappedSong(_stablecoin);

    WrappedSongSmartAccount wrappedSong = WrappedSongSmartAccount(
      payable(newWrappedSongSmartAccount)
    );
    wrappedSong.createsWrappedSongTokens(
      songURI,
      sharesAmount,
      sharesURI,
      msg.sender
    );

    emit WrappedSongCreatedWithMetadata(
      msg.sender,
      newWrappedSongSmartAccount,
      songURI,
      sharesAmount,
      sharesURI
    );
  }

  /**
   * @dev Returns the list of wrapped songs owned by the specified owner.
   * @param _owner The address of the owner.
   * @return An array of addresses of the wrapped songs owned by the owner.
   */
  function getOwnerWrappedSongs(
    address _owner
  ) public view returns (address[] memory) {
    return ownerWrappedSongs[_owner];
  }
}
