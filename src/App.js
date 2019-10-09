import React from 'react';
import { Switch, Route } from 'react-router-dom';

import firebase from './firebase';
import Header from './components/header';
import { HomePage } from './pages/HomePage';
import ShopPage from './pages/shop';
import SignIn from './components/sign-in/SignIn';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
