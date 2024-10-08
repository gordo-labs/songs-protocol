/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export interface IWrappedSongSmartAccountInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "batchTransferShares"
      | "canReceiveERC20"
      | "checkAuthenticity"
      | "claimAllEarnings"
      | "claimEarnings"
      | "claimEthEarnings"
      | "createFungibleSongShares"
      | "createsSongToken"
      | "createsWrappedSongTokens"
      | "executeConfirmedMetadataUpdate"
      | "getReceivedTokens"
      | "getRedeemedEarnings"
      | "getRemainingEarnings"
      | "getSongSharesBalance"
      | "getTokenBalance"
      | "getTokenMetadata"
      | "getTokenTotalSupply"
      | "getTotalEarnings"
      | "getUnclaimedEarnings"
      | "getWSTokenManagementAddress"
      | "getWrappedSongMetadata"
      | "receiveERC20"
      | "receiveEarnings"
      | "requestUpdateMetadata"
      | "requestWrappedSongRelease"
      | "requestWrappedSongReleaseWithMetadata"
      | "setSharesForSale"
      | "transferSongShares"
      | "updateEarnings"
      | "updateMetadata"
      | "withdrawSaleFundsFromWSTokenManagement"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "batchTransferShares",
    values: [BigNumberish[], AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "canReceiveERC20",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "checkAuthenticity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimAllEarnings",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimEarnings",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimEthEarnings",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createFungibleSongShares",
    values: [BigNumberish, BigNumberish, string, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createsSongToken",
    values: [string, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "createsWrappedSongTokens",
    values: [string, BigNumberish, string, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "executeConfirmedMetadataUpdate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getReceivedTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRedeemedEarnings",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRemainingEarnings",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getSongSharesBalance",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenBalance",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenMetadata",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenTotalSupply",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalEarnings",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getUnclaimedEarnings",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getWSTokenManagementAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getWrappedSongMetadata",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "receiveERC20",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "receiveEarnings",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requestUpdateMetadata",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "requestWrappedSongRelease",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "requestWrappedSongReleaseWithMetadata",
    values: [AddressLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setSharesForSale",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferSongShares",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateEarnings",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateMetadata",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawSaleFundsFromWSTokenManagement",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "batchTransferShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "canReceiveERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkAuthenticity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimAllEarnings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimEarnings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimEthEarnings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createFungibleSongShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createsSongToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createsWrappedSongTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeConfirmedMetadataUpdate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReceivedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRedeemedEarnings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRemainingEarnings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSongSharesBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenTotalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalEarnings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnclaimedEarnings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWSTokenManagementAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWrappedSongMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receiveERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receiveEarnings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestUpdateMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestWrappedSongRelease",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestWrappedSongReleaseWithMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSharesForSale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferSongShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateEarnings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawSaleFundsFromWSTokenManagement",
    data: BytesLike
  ): Result;
}

export interface IWrappedSongSmartAccount extends BaseContract {
  connect(runner?: ContractRunner | null): IWrappedSongSmartAccount;
  waitForDeployment(): Promise<this>;

  interface: IWrappedSongSmartAccountInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  batchTransferShares: TypedContractMethod<
    [amounts: BigNumberish[], recipients: AddressLike[]],
    [void],
    "nonpayable"
  >;

  canReceiveERC20: TypedContractMethod<[], [boolean], "view">;

  checkAuthenticity: TypedContractMethod<[], [boolean], "view">;

  claimAllEarnings: TypedContractMethod<[], [void], "nonpayable">;

  claimEarnings: TypedContractMethod<[], [void], "nonpayable">;

  claimEthEarnings: TypedContractMethod<[], [void], "nonpayable">;

  createFungibleSongShares: TypedContractMethod<
    [
      songId: BigNumberish,
      sharesAmount: BigNumberish,
      sharesURI: string,
      creator: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;

  createsSongToken: TypedContractMethod<
    [songURI: string, participants: AddressLike[]],
    [bigint],
    "nonpayable"
  >;

  createsWrappedSongTokens: TypedContractMethod<
    [
      songURI: string,
      sharesAmount: BigNumberish,
      sharesURI: string,
      creator: AddressLike
    ],
    [[bigint, bigint] & { songId: bigint; newSongSharesId: bigint }],
    "nonpayable"
  >;

  executeConfirmedMetadataUpdate: TypedContractMethod<
    [tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  getReceivedTokens: TypedContractMethod<[], [string[]], "view">;

  getRedeemedEarnings: TypedContractMethod<
    [account: AddressLike],
    [bigint],
    "view"
  >;

  getRemainingEarnings: TypedContractMethod<
    [account: AddressLike],
    [bigint],
    "view"
  >;

  getSongSharesBalance: TypedContractMethod<
    [account: AddressLike],
    [bigint],
    "view"
  >;

  getTokenBalance: TypedContractMethod<
    [tokenId: BigNumberish],
    [bigint],
    "view"
  >;

  getTokenMetadata: TypedContractMethod<
    [tokenId: BigNumberish],
    [string],
    "view"
  >;

  getTokenTotalSupply: TypedContractMethod<
    [id: BigNumberish],
    [bigint],
    "view"
  >;

  getTotalEarnings: TypedContractMethod<
    [account: AddressLike],
    [bigint],
    "view"
  >;

  getUnclaimedEarnings: TypedContractMethod<
    [account: AddressLike],
    [bigint],
    "view"
  >;

  getWSTokenManagementAddress: TypedContractMethod<[], [string], "view">;

  getWrappedSongMetadata: TypedContractMethod<
    [tokenId: BigNumberish],
    [string],
    "view"
  >;

  receiveERC20: TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  receiveEarnings: TypedContractMethod<[], [void], "payable">;

  requestUpdateMetadata: TypedContractMethod<
    [tokenId: BigNumberish, newMetadata: string],
    [void],
    "nonpayable"
  >;

  requestWrappedSongRelease: TypedContractMethod<
    [_distributorWallet: AddressLike],
    [void],
    "nonpayable"
  >;

  requestWrappedSongReleaseWithMetadata: TypedContractMethod<
    [_distributorWallet: AddressLike, songURI: string],
    [void],
    "nonpayable"
  >;

  setSharesForSale: TypedContractMethod<
    [
      sharesId: BigNumberish,
      percentage: BigNumberish,
      pricePerShare: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  transferSongShares: TypedContractMethod<
    [amount: BigNumberish, to: AddressLike],
    [void],
    "nonpayable"
  >;

  updateEarnings: TypedContractMethod<[], [void], "nonpayable">;

  updateMetadata: TypedContractMethod<
    [tokenId: BigNumberish, newMetadata: string],
    [void],
    "nonpayable"
  >;

  withdrawSaleFundsFromWSTokenManagement: TypedContractMethod<
    [],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "batchTransferShares"
  ): TypedContractMethod<
    [amounts: BigNumberish[], recipients: AddressLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "canReceiveERC20"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "checkAuthenticity"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "claimAllEarnings"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "claimEarnings"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "claimEthEarnings"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "createFungibleSongShares"
  ): TypedContractMethod<
    [
      songId: BigNumberish,
      sharesAmount: BigNumberish,
      sharesURI: string,
      creator: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createsSongToken"
  ): TypedContractMethod<
    [songURI: string, participants: AddressLike[]],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createsWrappedSongTokens"
  ): TypedContractMethod<
    [
      songURI: string,
      sharesAmount: BigNumberish,
      sharesURI: string,
      creator: AddressLike
    ],
    [[bigint, bigint] & { songId: bigint; newSongSharesId: bigint }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "executeConfirmedMetadataUpdate"
  ): TypedContractMethod<[tokenId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getReceivedTokens"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "getRedeemedEarnings"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRemainingEarnings"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getSongSharesBalance"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getTokenBalance"
  ): TypedContractMethod<[tokenId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getTokenMetadata"
  ): TypedContractMethod<[tokenId: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getTokenTotalSupply"
  ): TypedContractMethod<[id: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getTotalEarnings"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getUnclaimedEarnings"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getWSTokenManagementAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getWrappedSongMetadata"
  ): TypedContractMethod<[tokenId: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "receiveERC20"
  ): TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "receiveEarnings"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "requestUpdateMetadata"
  ): TypedContractMethod<
    [tokenId: BigNumberish, newMetadata: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "requestWrappedSongRelease"
  ): TypedContractMethod<
    [_distributorWallet: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "requestWrappedSongReleaseWithMetadata"
  ): TypedContractMethod<
    [_distributorWallet: AddressLike, songURI: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setSharesForSale"
  ): TypedContractMethod<
    [
      sharesId: BigNumberish,
      percentage: BigNumberish,
      pricePerShare: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferSongShares"
  ): TypedContractMethod<
    [amount: BigNumberish, to: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updateEarnings"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateMetadata"
  ): TypedContractMethod<
    [tokenId: BigNumberish, newMetadata: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawSaleFundsFromWSTokenManagement"
  ): TypedContractMethod<[], [void], "nonpayable">;

  filters: {};
}
