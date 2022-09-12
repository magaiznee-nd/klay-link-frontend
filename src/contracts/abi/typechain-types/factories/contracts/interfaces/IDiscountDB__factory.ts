/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IDiscountDB,
  IDiscountDBInterface,
} from "../../../contracts/interfaces/IDiscountDB";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "discountRate",
        type: "uint16",
      },
    ],
    name: "UpdateERC1155DiscountRate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "nft",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "discountRate",
        type: "uint16",
      },
    ],
    name: "UpdateNFTDiscountRate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "discountRate",
        type: "uint16",
      },
    ],
    name: "UpdateUserDiscountRate",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "getDiscountRate",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IDiscountDB__factory {
  static readonly abi = _abi;
  static createInterface(): IDiscountDBInterface {
    return new utils.Interface(_abi) as IDiscountDBInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDiscountDB {
    return new Contract(address, _abi, signerOrProvider) as IDiscountDB;
  }
}