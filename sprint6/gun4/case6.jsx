//ReactStrap kullanarak bir primary buton oluştur ve form içinde kullan. 

//- Önce reactstrap'ten import et. 
//- İçinde Kaydet yazsın.

import React from 'react';
import { Button } from 'reactstrap';

export default function App(){
    return (
      <form id="newsletter">
        <input name="email" type="email"/>
        <Button color="primary" outline>Kaydet</Button>
      </form>
    )
}
   



/*
ORJ. SORU: 

export default function App(){
 return (
   <form id="newsletter">
     <input name="email" type="email"/>
   </form>
 )
}

*/