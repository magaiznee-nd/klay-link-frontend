import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../Layout";

const NotFound = () => {

    return (
        <Layout>
            <Helmet title="404" />
        </Layout>
    );
};

export default NotFound;