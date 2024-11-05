import React, { useEffect, useState } from "react";
import './App.css';
import { Fragment } from 'react';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoute } from '~/routes/routes';
import ScrollToTop from '~/Component/ScrollToTop/ScrollToTop';

function App() {


    return (
        <Router>
            <div className="App">
            <ScrollToTop />
                <Routes>
                    {publicRoute.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index} // Assign a unique key
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
