import React, { ReactNode } from 'react';
import { Provider } from "react-redux";

import store from "./state";
import ModalsProvider from './utils/ModalProvider';

const Providers = ({ children }: { children: ReactNode }) => {
    return (
        <Provider store={store}>
            <ModalsProvider>
                {children}
            </ModalsProvider>
        </Provider>
    )
};

export default Providers;