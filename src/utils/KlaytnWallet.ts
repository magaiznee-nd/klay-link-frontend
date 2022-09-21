import EventContainer from "./EventContainer";
import ConnectWalletPopup from "../components/WalletPopup";
import ExtWallet from "./ExtWallet";
import Klip from "./Klip";

class KlaytnWallet extends EventContainer {

    constructor() {
        super();
        this.checkConnected();

        ExtWallet.toss("connect", this);
        Klip.toss("connect", this);
    }

    private async checkConnected() {
        if (await this.connected() === true) {
            this.fireEvent("connect");
        }
    }

    public async loadAddress(): Promise<string | undefined> {
        if (ExtWallet.installed === true) {
            return await ExtWallet.loadAddress();
        } else {
            return Klip.address;
        }
    }

    public async connected() {
        return await this.loadAddress() !== undefined;
    }

    public async connect() {
        if (ExtWallet.installed === true) {
            return await ExtWallet.connect();
        } else {
            window.open("https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi", "_blank")
        }
    }

    public async signMessage(message: string): Promise<{
        signedMessage?: string,
        klipAddress?: string,
    }> {
        if (ExtWallet.installed === true) {
            return {
                signedMessage: await ExtWallet.signMessage(message),
            };
        } else {
            return {
                klipAddress: Klip.address,
            };
        }
    }
}

export default new KlaytnWallet();
