import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { utils } from "ethers";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../state/hooks";
import useAsyncEffect from "../../hooks/useAsyncEffect";

import styles from "./index.module.scss";

import Wallet from "../../utils/Wallet";
import KlayLinkContract from "../../contracts/KlayLinkContract";
import KlayLinkMinterContract from "../../contracts/KlayLinkMinterContract";

import MintLogo from "../../assets/images/mint-logo.svg";
import KlaytnLogo from "../../assets/icn/klaytn-logo.svg";
import KlaylinkLogo from "../../assets/icn/klaylink-logo.svg";
import Sbt from "../../assets/images/sbt.png";
import MintActive from "../../assets/images/mint-active.svg";
import MintInActive from "../../assets/images/mint-inactive.svg";
import CommonUtil from "../../utils/CommonUtil";
import { setAuth } from "../../state/auth";
import { Link, Redirect, useHistory } from "react-router-dom";
import { showWalletModal, } from "../../state/modal";
import { setQrCode } from "../../state/klip";

const Mint = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const address = useAppSelector((state) => state.auth.address);

    const [balance, setBalance] = useState(0);
    const [mintPrice, setMintPrice] = useState(0);
    const [discount, setDiscount] = useState(false);

    if (sessionStorage.__spa_path) {
        const to = sessionStorage.__spa_path;
        sessionStorage.removeItem("__spa_path");
        return <Redirect to={to} />;
    }

    const mintNft = async () => {
        await KlayLinkMinterContract.mint(discount, "0x");
        history.push("/success");
    }

    useAsyncEffect(async () => {
        if (await Wallet.connected() !== true) {
            await Wallet.connect();
        }
        const address = await Wallet.loadAddress();
        if (address !== undefined) {
            dispatch(setAuth({ isAuth: true, address: address }));
            const balance = (await KlayLinkContract.balanceOf(address)).toNumber();
            setBalance(balance);
        }
    }, []);

    useAsyncEffect(async () => setMintPrice(parseFloat(utils.formatEther(await KlayLinkMinterContract.mintPrice()))));

    return (
        <div>
            <Helmet title="PRE-LAUNCH | Klay Link" />
            <section className={styles.mintView}>
                <header className={styles.header}>
                    <nav className={styles.nav}>
                        <Link to="/">
                            <img src={KlaylinkLogo} alt="KLAY.LINK" />
                        </Link>
                        <ul className={styles.menu}>
                            <li>
                                {address === undefined ? <a className={styles.connectWallet}>카이카스 연결</a>
                                    : <div className={styles.connectWallet}>{CommonUtil.shortenAddress(address)}</div>
                                }
                            </li>
                        </ul>
                    </nav>
                </header>
                <main className={styles.main}>
                    <section className={styles.mintContainer}>
                        <div className={styles.left}>
                            <h2 className={styles.title}>
                                PRE-LAUNCH
                            </h2>
                            <div className={styles.sbtContainer}>
                                <img src={Sbt} alt="SBT.MP4" />
                            </div>
                            <p className={styles.korean}>
                                클레이.링크는 클레이튼 체인의 첫 번째<br />SBT로 WEB3.0플레이어의 신분증입니다.
                            </p>
                            <p className={styles.english}>
                                KLAY.link is the first SBT of klaytn.<br />This is the ID Card of the WEB 3.0 player.
                            </p>
                            <a href="https://www.klaytnfinder.io/account/0x6489f919432741965831f731Fa203553eA790614" target="_blank" className={styles.finder}>
                                <p>KLAYTN FINDER</p>
                            </a>
                        </div>
                        <div className={styles.right}>
                            <hr className={styles.divider} />
                            <div className={styles.content}>
                                <div className={styles.logoContainer}>
                                    <img src={MintLogo} alt="mint-logo" />
                                </div>
                                <h6 className={styles.price}>PRICE</h6>
                                <div className={styles.priceContainer}>
                                    <img src={KlaytnLogo} alt="KLAY" />
                                    <p>{mintPrice} KLAY</p>
                                </div>
                                <div className={styles.supplyContainer}>
                                    <h6>SUPPLY</h6>
                                    <div className={styles.progress}>
                                        <div className={styles.bar}></div>
                                        <div className={styles.statusIcon}>
                                            <img src={MintActive} alt="active" />
                                            <img src={MintInActive} alt="inactive" />
                                            <img src={MintInActive} alt="inactive" />
                                        </div>
                                        <div className={styles.statusText}>
                                            <p className={styles.active}>Pre-launch Discount Period</p>
                                            <p>Public Sale</p>
                                            <p>LFG</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.amountContainer}>
                                    <h6>AMOUNT</h6>
                                    <div className={styles.quantityContainer}>
                                        <p>Quantity : MAX 1 per wallet : 1</p>
                                        <h6>1 SBT</h6>
                                    </div>
                                </div>
                                {balance === 0 ? <button onClick={mintNft}>MINT</button>
                                    : <button className={styles.minted}>MINTED</button>}
                                <p className={styles.warn}>
                                    KLAY.LINK는 유료 어플리케이션이며 운영사들의 상황에 따라 서비스가 종료될 수 있습니다. KLAY.LINK는 SBT로
                                    구매자 지갑에 귀속되며 2차거래 및 환불이 불가합니다. MINT버튼은 해당사항에대한 동의로 간주합니다.
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
            </section>
        </div>
    );
};

export default Mint;