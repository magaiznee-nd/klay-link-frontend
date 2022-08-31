import React, { useState } from "react";
import { Helmet } from "react-helmet";

import Layout from "../Layout";

const Home = () => {
    return (
        <Layout>
            <Helmet title="Home" />
            <h1>Klay Link</h1>
        </Layout>
    );
};

export default Home;