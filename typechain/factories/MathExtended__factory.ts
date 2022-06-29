/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MathExtended, MathExtendedInterface } from "../MathExtended";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_value2",
        type: "uint256",
      },
    ],
    name: "add",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_values",
        type: "uint256[]",
      },
    ],
    name: "addBulk",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_value2",
        type: "uint256",
      },
    ],
    name: "getGcd",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "isPrime",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_value2",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_value3",
        type: "uint256",
      },
    ],
    name: "mulDiv",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_value2",
        type: "uint256",
      },
    ],
    name: "swapAwesome",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061050c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806342703494146100675780634330b9041461008f5780635b01c092146100b0578063771602f7146100d8578063aa9a0912146100eb578063c39dc59c146100fe575b600080fd5b61007a6100753660046102ca565b610111565b60405190151581526020015b60405180910390f35b6100a261009d3660046102e3565b610153565b604051908152602001610086565b6100c36100be3660046102e3565b6101ca565b60408051928352602083019190915201610086565b6100a26100e63660046102e3565b6101f7565b6100a26100f9366004610305565b61020a565b6100a261010c366004610347565b610283565b600060025b8281101561014a57610128818461041b565b6000036101385750600092915050565b8061014281610445565b915050610116565b50600192915050565b60008060008385036101695784925050506101c4565b600191505b84821115801561017e5750838211155b156101bb5761018d828661041b565b1580156101a1575061019f828561041b565b155b156101a95750805b816101b381610445565b92505061016e565b91506101c49050565b92915050565b6000806101d7838561045e565b93506101e38385610476565b92506101ef8385610476565b949293505050565b6000610203828461045e565b9392505050565b60008082116102555760405162461bcd60e51b8152602060048201526013602482015272056616c756520332063616e6e6f74206265203606c1b604482015260640160405180910390fd5b6000610261848661048d565b9050826102708261271061048d565b61027a91906104ac565b95945050505050565b600080805b8351821015610203578382815181106102a3576102a36104c0565b6020026020010151816102b6919061045e565b9050816102c281610445565b925050610288565b6000602082840312156102dc57600080fd5b5035919050565b600080604083850312156102f657600080fd5b50508035926020909101359150565b60008060006060848603121561031a57600080fd5b505081359360208301359350604090920135919050565b634e487b7160e01b600052604160045260246000fd5b6000602080838503121561035a57600080fd5b823567ffffffffffffffff8082111561037257600080fd5b818501915085601f83011261038657600080fd5b81358181111561039857610398610331565b8060051b604051601f19603f830116810181811085821117156103bd576103bd610331565b6040529182528482019250838101850191888311156103db57600080fd5b938501935b828510156103f9578435845293850193928501926103e0565b98975050505050505050565b634e487b7160e01b600052601260045260246000fd5b60008261042a5761042a610405565b500690565b634e487b7160e01b600052601160045260246000fd5b6000600182016104575761045761042f565b5060010190565b600082198211156104715761047161042f565b500190565b6000828210156104885761048861042f565b500390565b60008160001904831182151516156104a7576104a761042f565b500290565b6000826104bb576104bb610405565b500490565b634e487b7160e01b600052603260045260246000fdfea2646970667358221220a76fd23f697438ca741319bf8a4a086c641cc8d3aad8c4283ea75a035ba007f564736f6c634300080f0033";

export class MathExtended__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MathExtended> {
    return super.deploy(overrides || {}) as Promise<MathExtended>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MathExtended {
    return super.attach(address) as MathExtended;
  }
  connect(signer: Signer): MathExtended__factory {
    return super.connect(signer) as MathExtended__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MathExtendedInterface {
    return new utils.Interface(_abi) as MathExtendedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MathExtended {
    return new Contract(address, _abi, signerOrProvider) as MathExtended;
  }
}