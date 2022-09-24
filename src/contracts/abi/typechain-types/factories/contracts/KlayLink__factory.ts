/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { KlayLink, KlayLinkInterface } from "../../contracts/KlayLink";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "SetBaseURI",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "isMinter",
        type: "bool",
      },
    ],
    name: "SetMinter",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "getTokenId",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isMinter",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "baseURI_",
        type: "string",
      },
    ],
    name: "setBaseURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isMinter",
        type: "bool",
      },
    ],
    name: "setMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101406040523480156200001257600080fd5b50604051806040016040528060088152602001674b6c61794c696e6b60c01b815250604051806040016040528060018152602001603160f81b815250604051806040016040528060088152602001674b6c61794c696e6b60c01b8152506040518060400160405280600281526020016112d360f21b815250620000a46200009e620001ba60201b60201c565b620001be565b6001620000b28382620002b3565b506002620000c18282620002b3565b5050825160208085019190912083518483012060e08290526101008190524660a0818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81880181905281830187905260608201869052608082019490945230818401528151808203909301835260c0019052805194019390932091935091906080523060c05261012052505033600090815260066020908152604091829020805460ff191660011790558151808301909252601f82527f68747470733a2f2f6170692e6b6c61792e6c696e6b2f6d657461646174612f009082015260089250620001b3915082620002b3565b506200037f565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200023957607f821691505b6020821081036200025a57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002ae57600081815260208120601f850160051c81016020861015620002895750805b601f850160051c820191505b81811015620002aa5782815560010162000295565b5050505b505050565b81516001600160401b03811115620002cf57620002cf6200020e565b620002e781620002e0845462000224565b8462000260565b602080601f8311600181146200031f5760008415620003065750858301515b600019600386901b1c1916600185901b178555620002aa565b600085815260208120601f198616915b8281101562000350578886015182559484019460019091019084016200032f565b50858210156200036f5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a05160c05160e051610100516101205161116b620003cf600039600061085b015260006108aa01526000610885015260006107de0152600061080801526000610832015261116b6000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a2578063aa271e1a11610071578063aa271e1a14610205578063c87b56dd14610228578063cf456ae71461023b578063f15376861461024e578063f2fde38b1461026157600080fd5b806370a08231146101d1578063715018a6146101e45780638da5cb5b146101ec57806395d89b41146101fd57600080fd5b806342966c68116100de57806342966c681461016b57806355f804b3146101805780636352211e146101935780636a627842146101be57600080fd5b806301ffc9a71461011057806306fdde031461013857806318160ddd1461014d5780633644e51514610163575b600080fd5b61012361011e366004610ced565b610274565b60405190151581526020015b60405180910390f35b6101406102ab565b60405161012f9190610d47565b61015561033d565b60405190815260200161012f565b61015561036d565b61017e610179366004610d7a565b61037c565b005b61017e61018e366004610d93565b610424565b6101a66101a1366004610d7a565b610477565b6040516001600160a01b03909116815260200161012f565b6101556101cc366004610e21565b6104d4565b6101556101df366004610e21565b61058b565b61017e61060e565b6000546001600160a01b03166101a6565b610140610622565b610123610213366004610e21565b60066020526000908152604090205460ff1681565b610140610236366004610d7a565b610631565b61017e610249366004610e3c565b610698565b61015561025c366004610e21565b610750565b61017e61026f366004610e21565b610758565b60006001600160e01b03198216635b5e139f60e01b14806102a557506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600180546102ba90610e78565b80601f01602080910402602001604051908101604052809291908181526020018280546102e690610e78565b80156103335780601f1061030857610100808354040283529160200191610333565b820191906000526020600020905b81548152906001019060200180831161031657829003601f168201915b5050505050905090565b60055460009061035f906001600160801b03600160801b820481169116610ec8565b6001600160801b0316905090565b60006103776107d1565b905090565b8061038633610750565b146103c75760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064015b60405180910390fd5b6103d0816108f8565b60058054600160801b90046001600160801b03169060106103f083610ef0565b82546001600160801b039182166101009390930a928302919092021990911617905550600090815260076020526040812055565b61042c610988565b6008610439828483610f7a565b507f23c8c9488efebfd474e85a7956de6f39b17c7ab88502d42a623db2d8e382bbaa828260405161046b92919061103b565b60405180910390a15050565b6000818152600360205260408120546001600160a01b0316806102a55760405162461bcd60e51b815260206004820152601560248201527414d0950e881a5b9d985b1a59081d1bdad95b881251605a1b60448201526064016103be565b3360009081526006602052604081205460ff166105225760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016103be565b61052b82610750565b905061053782826109e2565b600580546001600160801b031690600061055083610ef0565b82546101009290920a6001600160801b0381810219909316918316021790915560055460008481526007602052604090209116905550919050565b60006001600160a01b0382166105f25760405162461bcd60e51b815260206004820152602660248201527f5342543a2061646472657373207a65726f206973206e6f7420612076616c69646044820152651037bbb732b960d11b60648201526084016103be565b506001600160a01b031660009081526004602052604090205490565b610616610988565b6106206000610b24565b565b6060600280546102ba90610e78565b606061063c82610b74565b6000610646610bd0565b905060008151116106665760405180602001604052806000815250610691565b8061067084610bdf565b60405160200161068192919061106a565b6040516020818303038152906040525b9392505050565b6106a0610988565b6001600160a01b03821660009081526006602052604090205481151560ff9091161515036106fc5760405162461bcd60e51b8152602060048201526009602482015268155390d2105391d15160ba1b60448201526064016103be565b6001600160a01b038216600081815260066020526040808220805460ff191685151590811790915590519092917f1f96bc657d385fd83da973a43f2ad969e6d96b6779b779571a7306db7ca1cd0091a35050565b6000816102a5565b610760610988565b6001600160a01b0381166107c55760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103be565b6107ce81610b24565b50565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561082a57507f000000000000000000000000000000000000000000000000000000000000000046145b1561085457507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b600061090382610477565b90506001600160a01b038116600090815260046020526040812080546001929061092e908490611099565b909155505060008281526003602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6000546001600160a01b031633146106205760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103be565b6001600160a01b038216610a385760405162461bcd60e51b815260206004820152601d60248201527f5342543a206d696e7420746f20746865207a65726f206164647265737300000060448201526064016103be565b6000818152600360205260409020546001600160a01b031615610a9d5760405162461bcd60e51b815260206004820152601960248201527f5342543a20746f6b656e20616c7265616479206d696e7465640000000000000060448201526064016103be565b6001600160a01b0382166000908152600460205260408120805460019290610ac69084906110b0565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000818152600360205260409020546001600160a01b03166107ce5760405162461bcd60e51b815260206004820152601560248201527414d0950e881a5b9d985b1a59081d1bdad95b881251605a1b60448201526064016103be565b6060600880546102ba90610e78565b606081600003610c065750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610c305780610c1a816110c8565b9150610c299050600a836110f7565b9150610c0a565b60008167ffffffffffffffff811115610c4b57610c4b610f16565b6040519080825280601f01601f191660200182016040528015610c75576020820181803683370190505b5090505b8415610ce057610c8a600183611099565b9150610c97600a8661110b565b610ca29060306110b0565b60f81b818381518110610cb757610cb761111f565b60200101906001600160f81b031916908160001a905350610cd9600a866110f7565b9450610c79565b949350505050565b505050565b600060208284031215610cff57600080fd5b81356001600160e01b03198116811461069157600080fd5b60005b83811015610d32578181015183820152602001610d1a565b83811115610d41576000848401525b50505050565b6020815260008251806020840152610d66816040850160208701610d17565b601f01601f19169190910160400192915050565b600060208284031215610d8c57600080fd5b5035919050565b60008060208385031215610da657600080fd5b823567ffffffffffffffff80821115610dbe57600080fd5b818501915085601f830112610dd257600080fd5b813581811115610de157600080fd5b866020828501011115610df357600080fd5b60209290920196919550909350505050565b80356001600160a01b0381168114610e1c57600080fd5b919050565b600060208284031215610e3357600080fd5b61069182610e05565b60008060408385031215610e4f57600080fd5b610e5883610e05565b915060208301358015158114610e6d57600080fd5b809150509250929050565b600181811c90821680610e8c57607f821691505b602082108103610eac57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60006001600160801b0383811690831681811015610ee857610ee8610eb2565b039392505050565b60006001600160801b03808316818103610f0c57610f0c610eb2565b6001019392505050565b634e487b7160e01b600052604160045260246000fd5b601f821115610ce857600081815260208120601f850160051c81016020861015610f535750805b601f850160051c820191505b81811015610f7257828155600101610f5f565b505050505050565b67ffffffffffffffff831115610f9257610f92610f16565b610fa683610fa08354610e78565b83610f2c565b6000601f841160018114610fda5760008515610fc25750838201355b600019600387901b1c1916600186901b178355611034565b600083815260209020601f19861690835b8281101561100b5786850135825560209485019460019092019101610feb565b50868210156110285760001960f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f19160101919050565b6000835161107c818460208801610d17565b835190830190611090818360208801610d17565b01949350505050565b6000828210156110ab576110ab610eb2565b500390565b600082198211156110c3576110c3610eb2565b500190565b6000600182016110da576110da610eb2565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082611106576111066110e1565b500490565b60008261111a5761111a6110e1565b500690565b634e487b7160e01b600052603260045260246000fdfea264697066735822122055a2a23362263f465614cd8f83e5a6cd966868fc71777b997e666dc726e3bcdc64736f6c634300080f0033";

type KlayLinkConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KlayLinkConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class KlayLink__factory extends ContractFactory {
  constructor(...args: KlayLinkConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<KlayLink> {
    return super.deploy(overrides || {}) as Promise<KlayLink>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): KlayLink {
    return super.attach(address) as KlayLink;
  }
  override connect(signer: Signer): KlayLink__factory {
    return super.connect(signer) as KlayLink__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KlayLinkInterface {
    return new utils.Interface(_abi) as KlayLinkInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KlayLink {
    return new Contract(address, _abi, signerOrProvider) as KlayLink;
  }
}