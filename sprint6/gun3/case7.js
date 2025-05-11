// 1- App component'inde users isimli bir state tanımla. Başlangıç değeri [] olsun. 
// 2- Component mount olduğunda https://jsonplaceholder.typicode.com/users adresine 
//  axios isteği at: 
//- success durumunda response'da gelen data'yı state'e ekle. 
//- fail durumunda oluşan error objesini konsola yazdır. 

// 3- ul#userList element'i içinde users state'indeki her bir item'ı Item component'i ile map'le. 
// - index'i key değeri olarak kullanabilirsin.


//App.js
import Item from './Item.js'
import { useEffect, useState } from 'react'
import axios from 'axios'



export default function App() {

    const [users, setUsers] = useState([]);
  
    useEffect( () => {
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then( (response) => {setUsers(response.data)} )
        .catch( (error) => console.log(error))
    })

  return (<><h1>Kullanıcı Listesi</h1>
  <ul id="userList" key={index}>
    {users.map( (user, index) => (
        <Item user={user} key={index} />
    ))}
    </ul></>)
}


//Item.js
import App from './App.js'
import { useState } from 'react'

export default function Item(props) {
  const {user} = props;
  return (<li><span>{user.name}</span> - {user.email}</li>)
}










/*

App.js
export default function App() {
  
  return (<><h1>Kullanıcı Listesi</h1>
  <ul id="userList"></ul></>)
}


Item.js
export default function Item(props) {
  const {user} = props;
  return (<li><span>{user.name}</span> - {user.email}</li>)
}

*/