import React, { useState } from "react";
import { Helmet } from "react-helmet";

import Layout from "../Layout";

const Mint = () => {
    const mintKlayNft = () => {

    }

    return (
        <Layout>
            <Helmet title="Mint" />
            <h1>Mint Test</h1>
            <button onClick={mintKlayNft}>Mint</button>
        </Layout>
    );
};

export default Mint;