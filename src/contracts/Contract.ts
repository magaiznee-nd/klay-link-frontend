import { BigNumber } from "@ethersproject/bignumber";
import Config from "./Config";
import EventContainer from "../utils/EventContainer";
import Klaytn from "../utils/Klaytn";
import Wallet from "../utils/Wallet";

export default abstract class Contract extends EventContainer {

    private walletContract: any | undefined;
    protected contract: any;

    constructor(public address: string, private abi: any) {
        super();
        this.contract = Klaytn.createContract(address, abi);
    }

    public async loadExtWalletContract() {
        if (await Wallet.loadChainId() !== Config.chainId) {
            this.fireEvent("wrongNetwork");
            console.error("Wrong Network");
        } else {
            if (await Wallet.connected() !== true) {
                await Wallet.connect();
            }
            if (this.walletContract === undefined) {
                this.walletContract = Wallet.createContract(this.address, this.abi);
            }
            return this.walletContract;
        }
    }

    protected async runMethod(methodName: string, ...params: any[]) {
        return await this.contract.methods[methodName](...params).call();
    }

    private async runWalletMethodWithGas(methodName: string, gas: number, ...params: any[]) {
        const from = await Wallet.loadAddress();
        const contract = await this.loadExtWalletContract();
        await contract?.methods[methodName](...params).send({ from, gas });
    }

    protected async runWalletMethod(methodName: string, ...params: any[]) {
        return this.runWalletMethodWithGas(methodName, 1500000, ...params);
    }

    protected async runWalletMethodWithLargeGas(methodName: string, ...params: any[]) {
        return this.runWalletMethodWithGas(methodName, 20000000, ...params);
    }

    protected async runWalletMethodWithValue(value: BigNumber, methodName: string, ...params: any[]) {
        const from = await Wallet.loadAddress();
        const contract = await this.loadExtWalletContract();
        await contract?.methods[methodName](...params).send({ from, gas: 1500000, value });
    }
}
