import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import Layout from "../Layout";

const Home = () => {

    return (
        <Layout>
            <Helmet title="Home" />
            <h1>Klay Link</h1>
            <Link to="/mint" className="text-white">Mint</Link>
        </Layout>
    );
};

export default Home;