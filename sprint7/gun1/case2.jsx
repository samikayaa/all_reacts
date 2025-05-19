//Aşağıdaki uygulamada, bir eğitim platformunun ana navigasyon menüsünü oluştur. 

//- "Dersler" ve "Profil" sayfalarına gitmek için <Link> component'ini kullan. 

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Route } from "react-router-dom";
import Dersler from './Dersler';
import Profil from './Profil';


function App() {
 return (
   <Router>
     <nav>
        <link to="/dersler">Dersler</link>
        <link to="/profil">Profil</link>
     </nav>
     <Route exact path="/dersler">
       <Dersler />
     </Route>
     <Route exact path="/profil">
       <Profil />
     </Route>
   </Router>
 );
}


export default App;

























/*

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Route } from "react-router-dom";
import Dersler from './Dersler';
import Profil from './Profil';


function App() {
 return (
   <Router>
     <nav>
    
     </nav>
     <Route exact path="/dersler">
       <Dersler />
     </Route>
     <Route exact path="/profil">
       <Profil />
     </Route>
   </Router>
 );
}


export default App;

*/