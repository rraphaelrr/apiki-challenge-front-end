import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Home from "../page/home/home";
import Post from "../page/posts/posts";

export default function Routing() {
    return (
        <BrowserRouter>
            <Routes>


                <Route path='/' element={<Home />} />


            </Routes>
        </BrowserRouter>
    )
}

