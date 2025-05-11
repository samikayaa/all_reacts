// App component'inde users isimli bir state tanımla. 
// Başlangıç değeri liste array'i olsun. 
// div.list-container element'i içinde users state'indeki her bir item'ı Item component'i ile map'le. 



//-İpucu: listede aynı isimler var. Key değerini ne yapabilirsin?


//App.js
import Item from './Item.js'
import { useState } from "react";

const liste = ["Emre", "Emre", "Hatice", "Hatice", "Melisa", "Tarık", "Ceren"]

export default function App() {

    const [users, setUsers] = useState(liste)

  return (<div className="list-container">
    {users.map( (name, index) => (
        <Item name={name} key={index} />
         )
        )
    }
  </div>)
}

//Item.js
import App from './App.js'

export default function Item(props) {
  const {name} = props;
  return <h1>{name} </h1>
}



