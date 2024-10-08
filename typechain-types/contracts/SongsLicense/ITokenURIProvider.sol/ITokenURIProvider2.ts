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

export interface ITokenURIProvider2Interface extends Interface {
  getFunction(nameOrSignature: "tokenURI"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [BigNumberish, string, string, string, string]
  ): string;

  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
}

export interface ITokenURIProvider2 extends BaseContract {
  connect(runner?: ContractRunner | null): ITokenURIProvider2;
  waitForDeployment(): Promise<this>;

  interface: ITokenURIProvider2Interface;

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

  tokenURI: TypedContractMethod<
    [
      tokenId: BigNumberish,
      name: string,
      baseURI: string,
      imageHash: string,
      htmlHash: string
    ],
    [string],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "tokenURI"
  ): TypedContractMethod<
    [
      tokenId: BigNumberish,
      name: string,
      baseURI: string,
      imageHash: string,
      htmlHash: string
    ],
    [string],
    "view"
  >;

  filters: {};
}
