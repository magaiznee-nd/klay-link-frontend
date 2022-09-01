import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { utils } from "ethers";
import { useAppSelector } from "../../state/hooks";
import useAsyncEffect from "../../hooks/useAsyncEffect";

import Layout from "../Layout";

import KlayLinkContract from "../../contracts/KlayLinkContract";
import KlayLinkMinterContract from "../../contracts/KlayLinkMinterContract";

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
        <Layout>
            <Helmet title="Mint" />
            <section>
                <h1 className="text-4xl text-white font-bold">Mint Test</h1>
                {isAuth && <p className="text-sm text-white">Your Wallet: {address}</p>}
                <p className="text-sm text-white">Mint Price: {mintPrice} KLAY</p>
                {isAuth ? <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 mt-4 rounded" onClick={mintNft}>Mint</button>
                    : <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-4 rounded">Connect Wallet</button>}
            </section>
        </Layout>
    );
};

export default Mint;