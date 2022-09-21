import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router-dom";

import Layout from "../Layout";

const NotFound = () => {
    if (sessionStorage.__spa_path) {
        const to = sessionStorage.__spa_path;
        sessionStorage.removeItem("__spa_path");
        return <Redirect to={to} />;
    }

    return (
        <Layout>
            <Helmet title="404" />
        </Layout>
    );
};

export default NotFound;