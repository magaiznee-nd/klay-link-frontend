import React from "react";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
    children,
}) => {
    return (
        <div>
            <Helmet defaultTitle="Klay Link" titleTemplate="%s | Klay Link">
            </Helmet>
            <Header />
            <main className="container mx-auto min-h-screen">
                {children!}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;