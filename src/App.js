import React from 'react';
import './App.css';
import ProductsGrid from './features/products/ProductsGrid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Product from './components/pages/Product';

function App(props) {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
          <ProductsGrid />
          </Route>
          <Route path="product/:id">
            <Product />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
