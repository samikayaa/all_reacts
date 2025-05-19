//Buton tıklandığında /profil sayfasını açsın.

import React from "react";
import { useHistory } from "react-router-dom";



function HomePageButton() {

 const history = useHistory();

 const handleClick = () => {
  history.push("/profil");
 };


 return <button onClick={handleClick}>Profil Sayfasına Git</button>;
}

export default HomePageButton;

