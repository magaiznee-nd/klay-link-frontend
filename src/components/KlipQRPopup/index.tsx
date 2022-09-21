import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleKlipModal } from "../../state/klip";
import { IKlipQRPopup } from "../../types";

import styles from "./index.module.scss";

const KlipQRPopup = (props: IKlipQRPopup) => {
    const dispatch = useDispatch();

    const closePopup = async () => {
        dispatch(toggleKlipModal());
    }

    return (
        <div className={styles.popup}>
            <div className={styles.klipQrPopup}>
                <h6 className={styles.title}>QR 코드로 Klip 접속</h6>
                <hr className={styles.divider} />
                <div className={styles.qrCodeContainer}>
                    <img className={styles.qrCode} src={props.dataURL} alt="Klip QR code" />
                </div>
                <hr className={styles.divider} />
                <p className={styles.content}>
                    QR 코드 리더기 또는 카카오톡 앱을 통해 QR 코드를 스캔해주세요.<br />
                    카카오톡 실행 ▶ 상단 검색창 클릭 ▶ 코드 스캔 후 로그인<br />
                    * Klip {'>'} 코드스캔 (사이드메뉴)에서도 스캔이 가능합니다.<br />
                </p>
                <button className={styles.close} onClick={closePopup}>확인</button>
            </div>
        </div>
    );
};

export default KlipQRPopup;