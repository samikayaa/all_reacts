//Aşağıdaki uygulamada, iki farklı sayfa için routing yap: 

//Ana Sayfa ("/") ve Hakkımızda Sayfası ("/hakkimizda"). `BrowserRouter`, `Switch` ve `Route` bileşenlerini kullanarak bu route'ları tanımla. 

//- `HomePage` ve `AboutPage` component'leri tanımlanmıştır. 
//- Gerekli yerde exact prop'unu kullanmayı unutma.



import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function HomePage() {
 return <div>Ana Sayfa</div>;
}


function AboutPage() {
 return <div>Hakkımızda</div>;
}


function App() {
 return (
   <Router>
     <Switch>
        <Route path="/" exact>
            <HomePage/>
        </Route>
        <Route path="/hakkimizda">
            <AboutPage/>
        </Route>

     </Switch>
   </Router>
 );
}

export default App;
























/*

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function HomePage() {
 return <div>Ana Sayfa</div>;
}


function AboutPage() {
 return <div>Hakkımızda</div>;
}


function App() {
 return (
   <Router>
     <Switch>


     </Switch>
   </Router>
 );
}


export default App;

*/