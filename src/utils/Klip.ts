import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import QRCode from "qrcode";
import Store from "./Store";
import EventContainer from "./EventContainer";

import { prepare, request, getResult } from "klip-sdk";

class Klip extends EventContainer {

    private static readonly BAPP_NAME = "KLAY LINK";

    public store = new Store("klip-store");

    public get address() {
        return this.store.get("address");
    }

    public set address(address: string | undefined) {
        this.store.set("address", address, true);
    }

    private async request(res: any): Promise<any> {
        request(res.request_key, async () => {
            const qr = await QRCode.toDataURL(`https://klipwallet.com/?target=/a2a?request_key=${res.request_key}`);
            window.localStorage.setItem("KlipQR", qr);
        });

        return new Promise((resolve) => {
            const interval = setInterval(async () => {
                const result = await getResult(res.request_key);
                if (result.result !== undefined) {
                    clearInterval(interval);
                    setTimeout(() => resolve(result.result), 2000);
                }
            }, 1000);
        });
    }

    public get connected() {
        return this.address !== undefined;
    }

    public async connect() {
        const res = await prepare.auth({ bappName: Klip.BAPP_NAME });
        this.address = (await this.request(res)).klaytn_address;
        this.fireEvent("connect");
    }

    public async runContractMethod(address: string, abi: any, _params: any[], value?: BigNumberish) {

        const params: any[] = [];
        for (const param of _params) {
            if (Array.isArray(param) === true) {
                const ps: any[] = [];
                for (const p of param) {
                    if (p instanceof BigNumber) {
                        ps.push(p.toString());
                    } else {
                        ps.push(p);
                    }
                }
                params.push(ps);
            } else if (param instanceof BigNumber) {
                params.push(param.toString());
            } else {
                params.push(param);
            }
        }

        const res = await prepare.executeContract({
            bappName: Klip.BAPP_NAME,
            to: address,
            abi: JSON.stringify(abi),
            params: JSON.stringify(params),
            value: (value === undefined ? 0 : value).toString(),
        });
        await this.request(res);
    }

    public async disconnect() {
        this.address = undefined;
        location.reload();
    }
}

export default new Klip();
