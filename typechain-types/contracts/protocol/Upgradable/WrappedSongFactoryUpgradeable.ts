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
} from "../../../common";

export interface WrappedSongFactoryUpgradeableInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "createWrappedSong"
      | "createWrappedSongWithMetadata"
      | "getOwnerWrappedSongs"
      | "ownerWrappedSongs"
      | "protocolModule"
      | "wrappedSongSmartAccountImplementation"
      | "wsTokensBaseImplementation"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "WrappedSongCreated"): EventFragment;

  encodeFunctionData(
    functionFragment: "createWrappedSong",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createWrappedSongWithMetadata",
    values: [AddressLike, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getOwnerWrappedSongs",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerWrappedSongs",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "protocolModule",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "wrappedSongSmartAccountImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "wsTokensBaseImplementation",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "createWrappedSong",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createWrappedSongWithMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOwnerWrappedSongs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ownerWrappedSongs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "protocolModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrappedSongSmartAccountImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wsTokensBaseImplementation",
    data: BytesLike
  ): Result;
}

export namespace WrappedSongCreatedEvent {
  export type InputTuple = [
    owner: AddressLike,
    wrappedSongSmartAccount: AddressLike,
    wsTokensBase: AddressLike
  ];
  export type OutputTuple = [
    owner: string,
    wrappedSongSmartAccount: string,
    wsTokensBase: string
  ];
  export interface OutputObject {
    owner: string;
    wrappedSongSmartAccount: string;
    wsTokensBase: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface WrappedSongFactoryUpgradeable extends BaseContract {
  connect(runner?: ContractRunner | null): WrappedSongFactoryUpgradeable;
  waitForDeployment(): Promise<this>;

  interface: WrappedSongFactoryUpgradeableInterface;

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

  createWrappedSong: TypedContractMethod<
    [_stablecoin: AddressLike],
    [void],
    "payable"
  >;

  createWrappedSongWithMetadata: TypedContractMethod<
    [_stablecoin: AddressLike, songURI: string, sharesAmount: BigNumberish],
    [void],
    "payable"
  >;

  getOwnerWrappedSongs: TypedContractMethod<
    [_owner: AddressLike],
    [string[]],
    "view"
  >;

  ownerWrappedSongs: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [string],
    "view"
  >;

  protocolModule: TypedContractMethod<[], [string], "view">;

  wrappedSongSmartAccountImplementation: TypedContractMethod<
    [],
    [string],
    "view"
  >;

  wsTokensBaseImplementation: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "createWrappedSong"
  ): TypedContractMethod<[_stablecoin: AddressLike], [void], "payable">;
  getFunction(
    nameOrSignature: "createWrappedSongWithMetadata"
  ): TypedContractMethod<
    [_stablecoin: AddressLike, songURI: string, sharesAmount: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "getOwnerWrappedSongs"
  ): TypedContractMethod<[_owner: AddressLike], [string[]], "view">;
  getFunction(
    nameOrSignature: "ownerWrappedSongs"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "protocolModule"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "wrappedSongSmartAccountImplementation"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "wsTokensBaseImplementation"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "WrappedSongCreated"
  ): TypedContractEvent<
    WrappedSongCreatedEvent.InputTuple,
    WrappedSongCreatedEvent.OutputTuple,
    WrappedSongCreatedEvent.OutputObject
  >;

  filters: {
    "WrappedSongCreated(address,address,address)": TypedContractEvent<
      WrappedSongCreatedEvent.InputTuple,
      WrappedSongCreatedEvent.OutputTuple,
      WrappedSongCreatedEvent.OutputObject
    >;
    WrappedSongCreated: TypedContractEvent<
      WrappedSongCreatedEvent.InputTuple,
      WrappedSongCreatedEvent.OutputTuple,
      WrappedSongCreatedEvent.OutputObject
    >;
  };
}
