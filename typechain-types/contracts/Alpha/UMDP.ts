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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export declare namespace UMDP {
  export type RoyaltyInfoStruct = {
    recipient: AddressLike;
    share: BigNumberish;
  };

  export type RoyaltyInfoStructOutput = [recipient: string, share: bigint] & {
    recipient: string;
    share: bigint;
  };
}

export interface UMDPInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "DEFAULT_ADMIN_ROLE"
      | "ISRC_MANAGER_ROLE"
      | "allocateRevenue"
      | "getISRCMetadataURI"
      | "getRoleAdmin"
      | "getRoyalties"
      | "grantISRCManagerRole"
      | "grantRole"
      | "hasRole"
      | "owner"
      | "renounceOwnership"
      | "renounceRole"
      | "revokeISRCManagerRole"
      | "revokeRole"
      | "royalties"
      | "setNFTISRC"
      | "setRoyalties"
      | "supportsInterface"
      | "transferOwnership"
      | "withdrawRoyalties"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ISRCRegistered"
      | "NFTISRCSet"
      | "OwnershipTransferred"
      | "RevenueAllocated"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
      | "RoyaltiesSet"
      | "RoyaltiesWithdrawn"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ISRC_MANAGER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allocateRevenue",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getISRCMetadataURI",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoyalties",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "grantISRCManagerRole",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeISRCManagerRole",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "royalties",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setNFTISRC",
    values: [AddressLike, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setRoyalties",
    values: [AddressLike, BigNumberish, UMDP.RoyaltyInfoStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawRoyalties",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ISRC_MANAGER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allocateRevenue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getISRCMetadataURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoyalties",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "grantISRCManagerRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revokeISRCManagerRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "royalties", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setNFTISRC", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRoyalties",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawRoyalties",
    data: BytesLike
  ): Result;
}

export namespace ISRCRegisteredEvent {
  export type InputTuple = [isrc: string, metadataURI: string];
  export type OutputTuple = [isrc: string, metadataURI: string];
  export interface OutputObject {
    isrc: string;
    metadataURI: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace NFTISRCSetEvent {
  export type InputTuple = [
    nftContract: AddressLike,
    tokenId: BigNumberish,
    isrc: string
  ];
  export type OutputTuple = [
    nftContract: string,
    tokenId: bigint,
    isrc: string
  ];
  export interface OutputObject {
    nftContract: string;
    tokenId: bigint;
    isrc: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RevenueAllocatedEvent {
  export type InputTuple = [
    nftContract: AddressLike,
    tokenId: BigNumberish,
    totalRevenue: BigNumberish
  ];
  export type OutputTuple = [
    nftContract: string,
    tokenId: bigint,
    totalRevenue: bigint
  ];
  export interface OutputObject {
    nftContract: string;
    tokenId: bigint;
    totalRevenue: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleAdminChangedEvent {
  export type InputTuple = [
    role: BytesLike,
    previousAdminRole: BytesLike,
    newAdminRole: BytesLike
  ];
  export type OutputTuple = [
    role: string,
    previousAdminRole: string,
    newAdminRole: string
  ];
  export interface OutputObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleGrantedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleRevokedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoyaltiesSetEvent {
  export type InputTuple = [
    nftContract: AddressLike,
    tokenId: BigNumberish,
    royalties: UMDP.RoyaltyInfoStruct[]
  ];
  export type OutputTuple = [
    nftContract: string,
    tokenId: bigint,
    royalties: UMDP.RoyaltyInfoStructOutput[]
  ];
  export interface OutputObject {
    nftContract: string;
    tokenId: bigint;
    royalties: UMDP.RoyaltyInfoStructOutput[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoyaltiesWithdrawnEvent {
  export type InputTuple = [recipient: AddressLike, amount: BigNumberish];
  export type OutputTuple = [recipient: string, amount: bigint];
  export interface OutputObject {
    recipient: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface UMDP extends BaseContract {
  connect(runner?: ContractRunner | null): UMDP;
  waitForDeployment(): Promise<this>;

  interface: UMDPInterface;

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

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  ISRC_MANAGER_ROLE: TypedContractMethod<[], [string], "view">;

  allocateRevenue: TypedContractMethod<
    [
      nftContract: AddressLike,
      tokenId: BigNumberish,
      totalRevenue: BigNumberish
    ],
    [void],
    "payable"
  >;

  getISRCMetadataURI: TypedContractMethod<[isrc: string], [string], "view">;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  getRoyalties: TypedContractMethod<
    [nftContract: AddressLike, tokenId: BigNumberish],
    [UMDP.RoyaltyInfoStructOutput[]],
    "view"
  >;

  grantISRCManagerRole: TypedContractMethod<
    [account: AddressLike],
    [void],
    "nonpayable"
  >;

  grantRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  renounceRole: TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;

  revokeISRCManagerRole: TypedContractMethod<
    [account: AddressLike],
    [void],
    "nonpayable"
  >;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  royalties: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish, arg2: BigNumberish],
    [[string, bigint] & { recipient: string; share: bigint }],
    "view"
  >;

  setNFTISRC: TypedContractMethod<
    [nftContract: AddressLike, tokenId: BigNumberish, isrc: string],
    [void],
    "nonpayable"
  >;

  setRoyalties: TypedContractMethod<
    [
      nftContract: AddressLike,
      tokenId: BigNumberish,
      _royalties: UMDP.RoyaltyInfoStruct[]
    ],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  withdrawRoyalties: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "DEFAULT_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "ISRC_MANAGER_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "allocateRevenue"
  ): TypedContractMethod<
    [
      nftContract: AddressLike,
      tokenId: BigNumberish,
      totalRevenue: BigNumberish
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "getISRCMetadataURI"
  ): TypedContractMethod<[isrc: string], [string], "view">;
  getFunction(
    nameOrSignature: "getRoleAdmin"
  ): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "getRoyalties"
  ): TypedContractMethod<
    [nftContract: AddressLike, tokenId: BigNumberish],
    [UMDP.RoyaltyInfoStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "grantISRCManagerRole"
  ): TypedContractMethod<[account: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "grantRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hasRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "renounceRole"
  ): TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeISRCManagerRole"
  ): TypedContractMethod<[account: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "revokeRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "royalties"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish, arg2: BigNumberish],
    [[string, bigint] & { recipient: string; share: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "setNFTISRC"
  ): TypedContractMethod<
    [nftContract: AddressLike, tokenId: BigNumberish, isrc: string],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setRoyalties"
  ): TypedContractMethod<
    [
      nftContract: AddressLike,
      tokenId: BigNumberish,
      _royalties: UMDP.RoyaltyInfoStruct[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawRoyalties"
  ): TypedContractMethod<[], [void], "nonpayable">;

  getEvent(
    key: "ISRCRegistered"
  ): TypedContractEvent<
    ISRCRegisteredEvent.InputTuple,
    ISRCRegisteredEvent.OutputTuple,
    ISRCRegisteredEvent.OutputObject
  >;
  getEvent(
    key: "NFTISRCSet"
  ): TypedContractEvent<
    NFTISRCSetEvent.InputTuple,
    NFTISRCSetEvent.OutputTuple,
    NFTISRCSetEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "RevenueAllocated"
  ): TypedContractEvent<
    RevenueAllocatedEvent.InputTuple,
    RevenueAllocatedEvent.OutputTuple,
    RevenueAllocatedEvent.OutputObject
  >;
  getEvent(
    key: "RoleAdminChanged"
  ): TypedContractEvent<
    RoleAdminChangedEvent.InputTuple,
    RoleAdminChangedEvent.OutputTuple,
    RoleAdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "RoleGranted"
  ): TypedContractEvent<
    RoleGrantedEvent.InputTuple,
    RoleGrantedEvent.OutputTuple,
    RoleGrantedEvent.OutputObject
  >;
  getEvent(
    key: "RoleRevoked"
  ): TypedContractEvent<
    RoleRevokedEvent.InputTuple,
    RoleRevokedEvent.OutputTuple,
    RoleRevokedEvent.OutputObject
  >;
  getEvent(
    key: "RoyaltiesSet"
  ): TypedContractEvent<
    RoyaltiesSetEvent.InputTuple,
    RoyaltiesSetEvent.OutputTuple,
    RoyaltiesSetEvent.OutputObject
  >;
  getEvent(
    key: "RoyaltiesWithdrawn"
  ): TypedContractEvent<
    RoyaltiesWithdrawnEvent.InputTuple,
    RoyaltiesWithdrawnEvent.OutputTuple,
    RoyaltiesWithdrawnEvent.OutputObject
  >;

  filters: {
    "ISRCRegistered(string,string)": TypedContractEvent<
      ISRCRegisteredEvent.InputTuple,
      ISRCRegisteredEvent.OutputTuple,
      ISRCRegisteredEvent.OutputObject
    >;
    ISRCRegistered: TypedContractEvent<
      ISRCRegisteredEvent.InputTuple,
      ISRCRegisteredEvent.OutputTuple,
      ISRCRegisteredEvent.OutputObject
    >;

    "NFTISRCSet(address,uint256,string)": TypedContractEvent<
      NFTISRCSetEvent.InputTuple,
      NFTISRCSetEvent.OutputTuple,
      NFTISRCSetEvent.OutputObject
    >;
    NFTISRCSet: TypedContractEvent<
      NFTISRCSetEvent.InputTuple,
      NFTISRCSetEvent.OutputTuple,
      NFTISRCSetEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "RevenueAllocated(address,uint256,uint256)": TypedContractEvent<
      RevenueAllocatedEvent.InputTuple,
      RevenueAllocatedEvent.OutputTuple,
      RevenueAllocatedEvent.OutputObject
    >;
    RevenueAllocated: TypedContractEvent<
      RevenueAllocatedEvent.InputTuple,
      RevenueAllocatedEvent.OutputTuple,
      RevenueAllocatedEvent.OutputObject
    >;

    "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;
    RoleAdminChanged: TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;

    "RoleGranted(bytes32,address,address)": TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;
    RoleGranted: TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;

    "RoleRevoked(bytes32,address,address)": TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
    RoleRevoked: TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;

    "RoyaltiesSet(address,uint256,tuple[])": TypedContractEvent<
      RoyaltiesSetEvent.InputTuple,
      RoyaltiesSetEvent.OutputTuple,
      RoyaltiesSetEvent.OutputObject
    >;
    RoyaltiesSet: TypedContractEvent<
      RoyaltiesSetEvent.InputTuple,
      RoyaltiesSetEvent.OutputTuple,
      RoyaltiesSetEvent.OutputObject
    >;

    "RoyaltiesWithdrawn(address,uint256)": TypedContractEvent<
      RoyaltiesWithdrawnEvent.InputTuple,
      RoyaltiesWithdrawnEvent.OutputTuple,
      RoyaltiesWithdrawnEvent.OutputObject
    >;
    RoyaltiesWithdrawn: TypedContractEvent<
      RoyaltiesWithdrawnEvent.InputTuple,
      RoyaltiesWithdrawnEvent.OutputTuple,
      RoyaltiesWithdrawnEvent.OutputObject
    >;
  };
}
