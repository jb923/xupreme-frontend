import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import Shop from './components/Shop';
import ViewAll from './components/ViewAll'
import "./stylesheets/header.css";
import "./stylesheets/footer.css";
import "./stylesheets/featuredItem.css"
import "./stylesheets/navbars.css"

const App = props => {
  // useEffect(() => {
  //     props.loadToken();
  // });

  // useEffect(() => {
  //     props.loadCart();
  // });

  // useEffect(() => {
  //     (async () => {
  //         await props.fetchProducts();
  //     })();
  // });

  // useEffect(() => {
  //     window.scrollTo(0, 0)
  // }, [])

  return (
      <BrowserRouter>
          <Route exact path="/" component={MainPage} />
          <Route path="/shop" component={Shop} />
          <Route path="/all" component={ViewAll} />
          {/* <Route path="/products/:productId" component={ProductPage} /> */}
          {/* <Route path="/cart" component={Cart} />
          <Route path="/category/:categoryId" component={ProductList} />
          <Route path="/profile" component={ProfilePage} /> */}
      </BrowserRouter>
  );

}

// const mapDispatchToProps = dispatch => {
//   return {
//       loadToken: () => dispatch(loadToken()),
//       loadCart: () => dispatch(loadCart()),
//       fetchProducts: () => dispatch(fetchProducts())
//   }
// }

export default connect(
  null,
  // mapDispatchToProps
)(
  App
);

