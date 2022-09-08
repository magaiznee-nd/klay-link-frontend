import React from "react";
import { useDispatch } from "react-redux";
import useAsyncEffect from "../../hooks/useAsyncEffect";
import { setAuth } from "../../state/auth";
import { useAppSelector } from "../../state/hooks";
import wallet from "../../utils/Wallet";

import logo from "../../assets/images/logo.svg";
import styles from "./index.module.scss";

const Header: React.FC = () => {
    const dispatch = useDispatch();

    // const address = useAppSelector((state) => state.auth.address);

    useAsyncEffect(async () => {
        if (await wallet.connected() !== true) {
            await wallet.connect();
        }
        const address = await wallet.loadAddress();
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
                        <a className={styles.connectWallet}>지갑 연결</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;