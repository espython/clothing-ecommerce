import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// Redux imports
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
// End Redux imports

import { auth, createUserProfileDocument } from './firebase';
import Header from './components/header';
import { HomePage } from './pages/HomePage';
import ShopPage from './pages/shop';
import SignInAndSignUpPage from './pages/signUp-and-signIn/SignUp-and-SignIn';

import './App.css';
import { dispatch } from 'rxjs/internal/observable/range';

class App extends Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      setCurrentUser(userAuth);

      console.log('user', userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => {
  return { setCurrentUser: user => dispatch(setCurrentUser(user)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
