import React from "react";
import { useDispatch } from "react-redux";
import useAsyncEffect from "../../hooks/useAsyncEffect";
import { setAuth } from "../../state/auth";
import { useAppSelector } from "../../state/hooks";
import Wallet from "../../utils/Wallet";

import logo from "../../assets/images/logo.svg";
import styles from "./index.module.scss";
import CommonUtil from "../../utils/CommonUtil";

const Header: React.FC = () => {
    const dispatch = useDispatch();

    const address = useAppSelector((state) => state.auth.address);

    useAsyncEffect(async () => {
        if (await Wallet.connected() !== true) {
            await Wallet.connect();
        }
        const address = await Wallet.loadAddress();
        if (address !== undefined) {
            dispatch(setAuth({ isAuth: true, address: address }));
        }
    }, []);

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <img src={logo} alt="klay.link" />
                <ul className={styles.menu}>
                    <li>
                        {address === undefined ? <a className={styles.connectWallet}>지갑 연결</a>
                            : <div className={styles.connectWallet}>{CommonUtil.shortenAddress(address)}</div>
                        }
                    </li>
                </ul>
            </nav>
        </header >
    );
};

export default Header;