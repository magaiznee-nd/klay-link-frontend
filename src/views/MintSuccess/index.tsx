import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../state/hooks";
import useAsyncEffect from "../../hooks/useAsyncEffect";

import styles from "./index.module.scss";

import Wallet from "../../utils/Wallet";

import MintLogo from "../../assets/images/mint-logo.svg";
import KlaylinkLogo from "../../assets/icn/klaylink-logo.svg";
import Sbt from "../../assets/images/sbt.png";
import MintSuccess1 from "../../assets/images/mint-success-1.png";
import MintSuccess2 from "../../assets/images/mint-success-2.png";
import MintSuccess3 from "../../assets/images/mint-success-3.png";
import MintSuccess4 from "../../assets/images/mint-success-4.png";

import CommonUtil from "../../utils/CommonUtil";
import { setAuth } from "../../state/auth";
import { Link, useNavigate } from "react-router-dom";

const MintSuccess = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const address = useAppSelector((state) => state.auth.address);

    if (sessionStorage.__spa_path) {
        const to = sessionStorage.__spa_path;
        sessionStorage.removeItem("__spa_path");
        navigate(to);
    }

    useAsyncEffect(async () => {
        if (await Wallet.connected() !== true) {
            await Wallet.connect();
        }
        const address = await Wallet.loadAddress();
        if (address !== undefined) {
            dispatch(setAuth({ isAuth: true, address: address }));
        }
    });

    return (
        <div>
            <Helmet title="링크 민팅 완료 | Klay Link" />
            {Wallet.installed === true ? undefined : <>{alert("카이카스 설치가 필요합니다.")}</>}
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
                                링크 민팅 완료
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
                                    <div></div>
                                    <h3>KLAY.LINK는 기본적으로 이런게 가능해요.</h3>
                                    <img src={MintLogo} alt="mint-logo" />
                                </div>
                                <div className={styles.gridContainer}>
                                    <div className={styles.item}>
                                        <img src={MintSuccess1} alt="KNS" />
                                        <p>
                                            <span className={styles.primary}>클레이.링크</span>는 <span className={styles.secondary}>KNS [ Klaytn Name Service ]</span> 와 연동
                                            여러분의 WEB3.0프로필을 구축하세요.
                                        </p>
                                    </div>
                                    <div className={styles.item}>
                                        <img src={MintSuccess2} alt="큐레이션" />
                                        <p>
                                            여러분이 보유한 NFT로 <span className={styles.primary}>여러분만의 새로운 세계관</span>을
                                            구축하세요.보유한 <span className={styles.primary}>NFT를 큐레이션</span> 할 수 있습니다.
                                        </p>
                                    </div>
                                    <div className={styles.item}>
                                        <img src={MintSuccess3} alt="NFT홀더 찾기" />
                                        <p>
                                            <span className={styles.primary}>클레이.링크</span>는 같은 취향의 사람들과 연결을 돕습니다.
                                            보유하신 NFT의 홀더들을 쉽게 찾을 수 있습니다.
                                        </p>
                                    </div>
                                    <div className={styles.item}>
                                        <img src={MintSuccess4} alt="QR코드" />
                                        <p>
                                            <span className={styles.primary}>클레이.링크는</span> WEB 3.0 플레이어의 명함입니다.<span className={styles.primary}>QR코드</span>
                                            를 통해 오프라인에서 쉽게 연결되세요 :)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </section>
        </div>
    );
};

export default MintSuccess;