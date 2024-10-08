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

export interface IDistributorWalletInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "acceptWrappedSongForReview"
      | "confirmUpdateMetadata"
      | "confirmWrappedSongRelease"
      | "currentBatchIndex"
      | "distributeEarnings"
      | "managedWrappedSongs"
      | "protocolModule"
      | "receiveBatchPaymentETH"
      | "receiveBatchPaymentStablecoin"
      | "receivePayment"
      | "receivePaymentETH"
      | "receivePaymentStablecoin"
      | "redeemETH"
      | "redeemWrappedSongEarnings"
      | "rejectUpdateMetadata"
      | "rejectWrappedSongRelease"
      | "setAccounting"
      | "setAccountingBatch"
      | "stablecoin"
      | "wrappedSongTreasury"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptWrappedSongForReview",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "confirmUpdateMetadata",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "confirmWrappedSongRelease",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "currentBatchIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "distributeEarnings",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "managedWrappedSongs",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "protocolModule",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "receiveBatchPaymentETH",
    values: [AddressLike[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "receiveBatchPaymentStablecoin",
    values: [AddressLike[], BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "receivePayment",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "receivePaymentETH",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "receivePaymentStablecoin",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemETH",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemWrappedSongEarnings",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rejectUpdateMetadata",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rejectWrappedSongRelease",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setAccounting",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setAccountingBatch",
    values: [AddressLike[], BigNumberish[], BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stablecoin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "wrappedSongTreasury",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptWrappedSongForReview",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "confirmUpdateMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "confirmWrappedSongRelease",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentBatchIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributeEarnings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "managedWrappedSongs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "protocolModule",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receiveBatchPaymentETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receiveBatchPaymentStablecoin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receivePayment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receivePaymentETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receivePaymentStablecoin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "redeemETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "redeemWrappedSongEarnings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rejectUpdateMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rejectWrappedSongRelease",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAccounting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAccountingBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stablecoin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "wrappedSongTreasury",
    data: BytesLike
  ): Result;
}

export interface IDistributorWallet extends BaseContract {
  connect(runner?: ContractRunner | null): IDistributorWallet;
  waitForDeployment(): Promise<this>;

  interface: IDistributorWalletInterface;

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

  acceptWrappedSongForReview: TypedContractMethod<
    [wrappedSong: AddressLike],
    [void],
    "nonpayable"
  >;

  confirmUpdateMetadata: TypedContractMethod<
    [wrappedSong: AddressLike, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  confirmWrappedSongRelease: TypedContractMethod<
    [wrappedSong: AddressLike],
    [void],
    "nonpayable"
  >;

  currentBatchIndex: TypedContractMethod<[], [bigint], "view">;

  distributeEarnings: TypedContractMethod<
    [_wrappedSong: AddressLike],
    [void],
    "nonpayable"
  >;

  managedWrappedSongs: TypedContractMethod<
    [arg0: BigNumberish],
    [string],
    "view"
  >;

  protocolModule: TypedContractMethod<[], [string], "view">;

  receiveBatchPaymentETH: TypedContractMethod<
    [_wrappedSongs: AddressLike[], _amounts: BigNumberish[]],
    [void],
    "payable"
  >;

  receiveBatchPaymentStablecoin: TypedContractMethod<
    [
      _wrappedSongs: AddressLike[],
      _amounts: BigNumberish[],
      _totalAmount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  receivePayment: TypedContractMethod<
    [_wrappedSong: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  receivePaymentETH: TypedContractMethod<
    [_wrappedSong: AddressLike],
    [void],
    "payable"
  >;

  receivePaymentStablecoin: TypedContractMethod<
    [_wrappedSong: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  redeemETH: TypedContractMethod<
    [_wrappedSong: AddressLike],
    [void],
    "nonpayable"
  >;

  redeemWrappedSongEarnings: TypedContractMethod<
    [_wrappedSong: AddressLike],
    [void],
    "nonpayable"
  >;

  rejectUpdateMetadata: TypedContractMethod<
    [wrappedSong: AddressLike, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;

  rejectWrappedSongRelease: TypedContractMethod<
    [wrappedSong: AddressLike],
    [void],
    "nonpayable"
  >;

  setAccounting: TypedContractMethod<
    [_wrappedSong: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  setAccountingBatch: TypedContractMethod<
    [
      _wrappedSongs: AddressLike[],
      _amounts: BigNumberish[],
      _totalAmount: BigNumberish,
      _batchSize: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  stablecoin: TypedContractMethod<[], [string], "view">;

  wrappedSongTreasury: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "acceptWrappedSongForReview"
  ): TypedContractMethod<[wrappedSong: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "confirmUpdateMetadata"
  ): TypedContractMethod<
    [wrappedSong: AddressLike, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "confirmWrappedSongRelease"
  ): TypedContractMethod<[wrappedSong: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "currentBatchIndex"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "distributeEarnings"
  ): TypedContractMethod<[_wrappedSong: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "managedWrappedSongs"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "protocolModule"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "receiveBatchPaymentETH"
  ): TypedContractMethod<
    [_wrappedSongs: AddressLike[], _amounts: BigNumberish[]],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "receiveBatchPaymentStablecoin"
  ): TypedContractMethod<
    [
      _wrappedSongs: AddressLike[],
      _amounts: BigNumberish[],
      _totalAmount: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "receivePayment"
  ): TypedContractMethod<
    [_wrappedSong: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "receivePaymentETH"
  ): TypedContractMethod<[_wrappedSong: AddressLike], [void], "payable">;
  getFunction(
    nameOrSignature: "receivePaymentStablecoin"
  ): TypedContractMethod<
    [_wrappedSong: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "redeemETH"
  ): TypedContractMethod<[_wrappedSong: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "redeemWrappedSongEarnings"
  ): TypedContractMethod<[_wrappedSong: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "rejectUpdateMetadata"
  ): TypedContractMethod<
    [wrappedSong: AddressLike, tokenId: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "rejectWrappedSongRelease"
  ): TypedContractMethod<[wrappedSong: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setAccounting"
  ): TypedContractMethod<
    [_wrappedSong: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setAccountingBatch"
  ): TypedContractMethod<
    [
      _wrappedSongs: AddressLike[],
      _amounts: BigNumberish[],
      _totalAmount: BigNumberish,
      _batchSize: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "stablecoin"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "wrappedSongTreasury"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  filters: {};
}
