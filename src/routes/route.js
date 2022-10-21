import React from 'react';
import { Route, BrowserRouter  } from 'react-router-dom';

import Home from "../page/home/home";
import Post from "../page/posts/posts";

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path='/' component={Home} exact />
        </BrowserRouter>
    )
}

