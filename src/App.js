import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { ProtectedRoute} from './utils/routeUtils';
import { loadToken } from "./actions/sessionActions";
import { fetchProducts } from "./actions/productActions";
import { fetchSizes } from "./actions/sizeActions";
import { loadCart } from "./actions/cartActions";

import MainPage from './components/MainPage';
import Shop from './components/Shop';
import ViewAll from './components/ViewAll';
import Login from './components/Login';
import Signup from './components/Signup';
import News from './components/News';
import About from './components/About';
import Stores from './components/Stores';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import Bio from './components/Bio';
import Contact from './components/Contact';
import Checkout from './components/Checkout';
import Profile from './components/Profile';


const App = props => {

  useEffect(() => {
      props.loadToken();
  },[]);

  useEffect(() => {
      props.loadCart();
  },[]);

  useEffect(() => {
      (async () => {
          await props.fetchProducts();
      })();
  });

  useEffect(() => {
    (async () => {
        await props.fetchSizes();
    })();
  });




  return (
      <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login} />
            <Route exact path="/" component={MainPage} />
            <Route path="/shop" component={Shop} />
            <Route path="/all" component={ViewAll} />
            <Route path="/signup" component={Signup} />
            <Route path="/news" component={News} />
            <Route path="/about" component={About} />
            <Route path="/stores" component={Stores} />
            <Route path="/product/:productId" component={ProductPage} />
            <Route path="/cart" component={Cart} />
            <Route path="/category/:categoryId" component={ProductList} />
            {/* <Route path="/terms" component={Terms} /> */}
            <Route path="/bio" component={Bio} />
            <Route path="/contact" component={Contact} />
            <Route path="/checkout" component={Checkout} />
            <ProtectedRoute path="/profile" isLoggedIn={props.token} component={Profile} />
        </Switch>
      </BrowserRouter>
  );

}

const mapStateToProps = state => {
  return {
    token: state.session.token
  };
};


const mapDispatchToProps = dispatch => {
  return {
      loadToken: () => dispatch(loadToken()),
      loadCart: () => dispatch(loadCart()),
      fetchProducts: () => dispatch(fetchProducts()),
      fetchSizes: () => dispatch(fetchSizes())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  App
);

