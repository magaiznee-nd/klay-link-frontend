import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleKlipModal } from "../../state/klip";
import { IKlipQRPopup } from "../../types";

import KlipIcon from "../../assets/icn/klip-logo-colored.svg";

import styles from "./index.module.scss";

const KlipQRPopup = (props: IKlipQRPopup) => {
    const dispatch = useDispatch();

    const closePopup = async () => {
        dispatch(toggleKlipModal());
    }

    return (
        <div className={styles.popup}>
            <div className={styles.klipQrPopup}>
                <div className={styles.titleContainer}>
                    <img src={KlipIcon} alt="KlipIcon" />
                    <h6 className={styles.title}>LOGIN</h6>
                </div>
                <div className={styles.qrCodeContainer}>
                    <img className={styles.qrCode} src={props.dataURL} alt="Klip QR code" />
                </div>
                <p className={styles.content}>
                    <span>QR 코드 리더기</span> 또는 <span>카카오톡 앱</span>을 통해 QR코드를 스캔해주세요.<br/>
                    카카오톡 실행 {'>'} 상단 검색창 클릭 {'>'} QR코드 스캔 후 로그인<br/>
                    <span>KLIP {'>'} 코드스캔 (사이드메뉴)에서도 스캔이 가능합니다.</span><br/>
                </p>
                <button className={styles.close} onClick={closePopup}>확인</button>
            </div>
        </div>
    );
};

export default KlipQRPopup;