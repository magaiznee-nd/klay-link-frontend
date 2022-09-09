import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, Navigate, Route, Routes } from "react-router-dom";

import Layout from "../Layout";

const Home = () => {

    if (sessionStorage.__spa_path) {
        const to = sessionStorage.__spa_path;
        sessionStorage.removeItem("__spa_path");
        return <Routes><Route element={<Navigate replace to={to}/>} /></Routes>;
    }

    return (
        <Layout>
            <Helmet title="Home" />
            <h1>Klay Link</h1>
            <Link to="/mint" className="text-white">Mint</Link>
        </Layout>
    );
};

export default Home;