import './App.css';

import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'

import AddProductsForm from './pages/AddProductsForm'
import NavbarProducts from './components/NavbarProducts';
import Products from './pages/Products';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
  <BrowserRouter>
    <NavbarProducts />
    <Switch> 
      <Route exact path='/'>
        <Redirect to='/Products' />  
      </Route>
      <Route exact path='/Products'>
      <Products />
      </Route>
      <Route exact path='/Cart'>
        <ShoppingCart />
      </Route>
      <Route exact path='/Form'>
        <AddProductsForm />
      </Route>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
