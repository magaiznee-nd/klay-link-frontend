import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import Layout from "../Layout";

const NotFound = () => {
    useEffect(() => {
        sessionStorage.__spa_path = location.pathname + location.search;
        location.replace("/");
    });

    return (
        <Layout>
            <Helmet title="404" />
        </Layout>
    );
};

export default NotFound;