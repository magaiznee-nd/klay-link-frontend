import { BigNumber } from "ethers";
import Config from "./Config";
import KlayLinkMinterArtifact from "./abi/artifacts/contracts/KlayLinkMinter.sol/KlayLinkMinter.json";
import Contract from "./Contract";

class KlayLinkMinterContract extends Contract {

    constructor() {
        super(Config.contracts.KlayLinkMinter, KlayLinkMinterArtifact.abi);
    }

    public async txLimit(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("limit"));
    }

    public async mintPrice(): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("mintPrice"));
    }

    public async mint(discount: boolean, data: string): Promise<void> {
        await this.runWalletMethod("mint", discount, data);
    }
}

export default new KlayLinkMinterContract();
