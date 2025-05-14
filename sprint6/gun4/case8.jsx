//ReactStrap kullanarak bir kullanıcı isimlerinin yanına kırmızı(tanımlı) Sil butonu ekle. 

//- Önce reactstrap'ten import et. 
//- isim ile buton arasına boşluk koymaya dikkat.

import {useState} from 'react';
import { Button } from 'reactstrap';

export default function App(){
 const [users, setUsers] = useState(["Emre", "Erdem", "Melisa"]);
 return (
   <div>
     {
       users.map((item,index)=>(
         <div key={index}>{item}
            <Button color="danger">Sil</Button>
         </div>
       ))
     }
   </div>
 )
}





/*
ORJ. SORU:

import {useState} from 'react';

export default function App(){
 const [users, setUsers] = useState(["Emre", "Erdem", "Melisa"]);
 return (
   <div>
     {
       users.map((item,index)=>(
         <div key={index}>{item}</div>
       ))
     }
   </div>
 )
}

*/