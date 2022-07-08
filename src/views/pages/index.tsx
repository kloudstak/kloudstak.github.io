import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './home';

class Pages extends React.Component {
    render() {
        return (
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        );
    }
}

export default Pages;
