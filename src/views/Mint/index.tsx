import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { utils } from "ethers";
import { useAppSelector } from "../../state/hooks";
import useAsyncEffect from "../../hooks/useAsyncEffect";

import Layout from "../Layout";
import styles from "./index.module.scss";

import KlayLinkContract from "../../contracts/KlayLinkContract";
import KlayLinkMinterContract from "../../contracts/KlayLinkMinterContract";

import MintLogo from "../../assets/images/mint-logo.svg";
import KlaytnLogo from "../../assets/icn/klaytn-logo.svg";
import MintActive from "../../assets/images/mint-active.svg";
import MintInActive from "../../assets/images/mint-inactive.svg";

const Mint = () => {
    const isAuth = useAppSelector((state) => state.auth.isAuth);
    const address = useAppSelector((state) => state.auth.address);

    const [mintPrice, setMintPrice] = useState(0);
    const [discount, setDiscount] = useState(false);

    const mintNft = async () => {
        await KlayLinkMinterContract.mint(discount, "0x");
    }

    useAsyncEffect(async () => setMintPrice(parseFloat(utils.formatEther(await KlayLinkMinterContract.mintPrice()))));

    return (
        <div>
            <Helmet title="Mint | Klay Link" />
            <section className={styles.mintView}>
                <header className={styles.header}>
                    <nav className={styles.nav}>
                        <img src="" alt="KLAY.LINK" />
                        <ul className={styles.menu}>
                            <li>
                                <a className={styles.connectWallet}>카이카스 연결</a>
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
                                <img src="" alt="SBT.MP4" />
                            </div>
                            <p className={styles.korean}>
                                클레이.링크는 클레이튼 체인의 첫 번째<br />SBT로 WEB3.0플레이어의 신분증입니다.
                            </p>
                            <p className={styles.english}>
                                KLAY.link is the first SBT of klaytn.<br />This is the ID Card of the WEB 3.0 player.
                            </p>
                            <a className={styles.finder}>
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
                                <button onClick={mintNft}>MINT</button>
                            </div>
                        </div>
                    </section>
                </main>
            </section>
        </div>
    );
};

export default Mint;