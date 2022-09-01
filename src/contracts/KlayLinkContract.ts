import { BigNumber, BigNumberish } from "ethers";
import Config from "./Config";
import KlayLinkArtifact from "./abi/artifacts/contracts/KlayLink.sol/KlayLink.json";
import Contract from "./Contract";

class KlayLinkContract extends Contract {

    constructor() {
        super(Config.contracts.KlayLink, KlayLinkArtifact.abi);
    }

    public async paused(): Promise<boolean> {
        return await this.runMethod("paused");
    }

    public async balanceOf(owner: string): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("balanceOf", owner));
    }

    public async getTokenId(owner: string): Promise<BigNumber> {
        return BigNumber.from(await this.runMethod("getTokenId", owner));
    }
}

export default new KlayLinkContract();
