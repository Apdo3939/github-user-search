import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './core/components/navbar';
import Home from './pages/home/Home';
import Search from './pages/Search';

const Routers = () => {

    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/search" exact>
                    <Search />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routers;