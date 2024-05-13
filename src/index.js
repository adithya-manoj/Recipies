import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NavbarComp from './NavbarComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import CategoryItems from './CategoryItems';
import Itemrecipe from './Itemrecipe';
import  store from './Store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

  <React.StrictMode>
    <BrowserRouter>
      <NavbarComp />
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/categories/:catname' element={<CategoryItems/>}></Route>
        <Route path='/categoryitem/:recipe' element={<Itemrecipe/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
);
