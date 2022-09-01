import React from "react";
import { useDispatch } from "react-redux";
import useAsyncEffect from "../../hooks/useAsyncEffect";
import { setAuth } from "../../state/auth";
import { useAppSelector } from "../../state/hooks";
import wallet from "../../utils/Wallet";

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
        <header>
        </header>
    );
};

export default Header;