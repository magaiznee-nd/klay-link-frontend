import React from "react";
import { useDispatch } from "react-redux";
import { showKlipModal } from "../../state/klip";
import { toggleWalletModal } from "../../state/modal";
import KlaytnWallet from "../../utils/KlaytnWallet";
import Klip from "../../utils/Klip";

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
                <h6 className={styles.title}>지갑연결</h6>
                <hr className={styles.divider} />
                <p className={styles.content}>KLAY.LINK는 블록체인과 연결이 필요합니다.</p>
                <div className={styles.buttonContainer}>
                    <button className={styles.kaikas} onClick={connectKaikas}>카이카스 연결</button>
                    <button className={styles.klip} onClick={connectKlip}>카카오톡 클립으로 연결</button>
                    <button onClick={closePopup}>연결하지 않고 둘러보기</button>
                </div>
            </div>
        </div>
    );
};

export default WalletPopup;