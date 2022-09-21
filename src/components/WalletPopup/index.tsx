import React from "react";
import { useDispatch } from "react-redux";
import { showKlipModal } from "../../state/klip";
import { toggleWalletModal } from "../../state/modal";
import KlaytnWallet from "../../utils/KlaytnWallet";
import Klip from "../../utils/Klip";

import KaikasIcon from "../../assets/icn/kaikas-logo.png";
import KlipIcon from "../../assets/icn/klip-logo.svg";
import KlaylinkLogo from "../../assets/icn/klaylink-logo.svg";

import styles from "./index.module.scss";

const WalletPopup = () => {
    const dispatch = useDispatch();

    const connectKaikas = async () => {
        await KlaytnWallet.connect();
        dispatch(toggleWalletModal());
    }

    const connectKlip = async () => {
        dispatch(showKlipModal());
        await Klip.connect();
    }

    const closePopup = async () => {
        dispatch(toggleWalletModal());
    }

    return (
        <div className={styles.popup}>
            <div className={styles.walletPopup}>
                <h6 className={styles.title}>LOGIN</h6>
                <div className={styles.buttonContainer}>
                    <button className={styles.kaikas} onClick={connectKaikas}>
                        <img src={KaikasIcon} alt="KaikasIcon" />
                        <p>카이카스 연결</p>
                        <div />
                    </button>
                    <button className={styles.klip} onClick={connectKlip}>
                        <img src={KlipIcon} alt="KlipIcon" />
                        <p>카카오톡 클립으로 연결</p>
                        <div />
                    </button>
                    <button className={styles.close} onClick={closePopup}>연결하지 않고 둘러보기</button>
                </div>
                <div className={styles.logoContainer}>
                    <img src={KlaylinkLogo} alt="mint-logo" />
                </div>
            </div>
        </div>
    );
};

export default WalletPopup;