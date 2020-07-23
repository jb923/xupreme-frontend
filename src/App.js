import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import { fetchProducts } from "./actions/productActions";
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
// import "./stylesheets/header.css";
// import "./stylesheets/footer.css";
// import "./stylesheets/featuredItem.css";
// import "./stylesheets/navbars.css";
// import "./stylesheets/session.css";
// import "./stylesheets/news.css";
// import "./stylesheets/stores.css";
// import "./stylesheets/productlist.css";
// import "./stylesheets/productpage.css";
// import "./stylesheets/cart.css";

const App = props => {
  // useEffect(() => {
  //     props.loadToken();
  // });

  useEffect(() => {
      props.loadCart();
  });

  useEffect(() => {
      (async () => {
          await props.fetchProducts();
      })();
  });

  // useEffect(() => {
  //     window.scrollTo(0, 0)
  // }, [])

  return (
      <BrowserRouter>
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
          {/* // <Route path="/profile" component={ProfilePage} /> */}
      </BrowserRouter>
  );

}

const mapDispatchToProps = dispatch => {
  return {
      // loadToken: () => dispatch(loadToken()),
      loadCart: () => dispatch(loadCart()),
      fetchProducts: () => dispatch(fetchProducts())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(
  App
);

