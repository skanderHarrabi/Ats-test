import React, { useRef } from "react";
import { connect, Provider } from "react-redux";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import HomePage from "./pages/home-page/Home";
import Product from "./pages/home-page/single_product_page/Product";
import store from "./stores/store-dev";
import './App.scss';



const App = props => {

  const refs = {
    contactRef: useRef(null),
    reviewRef: useRef(null),
    teamRef: useRef(null),
    serviceRef: useRef(null),
    aProposRef: useRef(null)
  }
  return (
    <Provider store={store}>
      <div className={"app"}>
        <Switch location={props.history.location}>
          <Route exact path={"/"} component={HomePage} />
          <Route exact path={"/product/:id"} component={Product} />
        </Switch>
      </div>
    </Provider>
  );
};

const mapStateToProps = reduxStore => {
  return {
    isLoggedIn: reduxStore.authReducer.isLoggedIn,
    user: reduxStore.authReducer.user,
    isLoadingUser: reduxStore.authReducer.isLoadingUser
  };
};

export default withRouter(
  connect(
    mapStateToProps,
  )(App)
);
