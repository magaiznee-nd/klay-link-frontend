import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import KlipQRPopup from "../components/KlipQRPopup";
import WalletPopup from "../components/WalletPopup";
import { useAppSelector } from "../state/hooks";
import { showWalletModal } from "../state/modal";
import Klip from "./Klip";
import Wallet from "./Wallet";

const ModalsProvider: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
    children
}) => {

    const [qr, setQR] = useState("");

    const dispatch = useDispatch();
    const isWalletModal = useAppSelector((state) => state.modal.isWalletModal);
    const isKlipModal = useAppSelector((state) => state.klip.isKlipModal);

    useEffect(() => {
        if (!Wallet.installed) {
            dispatch(showWalletModal());
            Klip.connect();
            const klipQR = window.localStorage.getItem("KlipQR");
            setQR(klipQR);
        }
    }, []);

    return (
        <div>
            {isWalletModal&&<WalletPopup/>}
            {isKlipModal && <KlipQRPopup dataURL={qr} />}
            {children!}
        </div>
    );
};

export default ModalsProvider;