import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Sign from './pages/sign/sign.component';
import Header from './components/header/header.component';

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/sign" component={Sign} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
