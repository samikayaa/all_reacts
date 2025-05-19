//navigasyon menüsünde tanımlı ürünlerin id'lerini ekranda gösterecek şekilde kodu düzenleyin. 

//- Önce App.js'de id'yi url'den alacak şekilde route tanımla. 
//- Product component'inde id'yi url'den al ve ekranda göster.



//Index.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter} from 'react-router-dom';
import "./styles.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


//App.jsx
import {Switch, Link} from 'react-router-dom';
import Product from './Product'

export default function App() {

  return <>
    <header>
      <nav>
        <Link to="/product/1">Ürün 1</Link>
        <Link to="/product/2">Ürün 2</Link>
        <Link to="/product/3">Ürün 3</Link>
      </nav>
    </header>
    
    <Switch>
        <Route path="/product/:id">
            <Product/>
        </Route>
    </Switch>
    </>
}


//Product.jsx
import {useParams} from 'react-router-dom';
import App from './App'

let {id} = useParams();

export default function Product(){
  return <div className="content">Ürün id: {id}</div>
}

