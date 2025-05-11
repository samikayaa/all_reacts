// App component'i mount olduğunda https://reqres.in/api/users/1 adresine istek atsın 
// ve başarılı bir istek sonucunda gelen data'daki url'i avatar state'ine eklesin. 

//- İpucu: gelen reponse'daki data'yı konsola yazdırıp ne geldiğine bakabilirsin.


import {useState} from 'react';
import axios from 'axios';

export default function App() {
  const [avatar, setAvatar] = useState("");

  useEffect( () => {
    axios
    .get("https://reqres.in/api/users/1")
    .then( (response) => {setAvatar(response.how_to_get_one)})
    .catch( (error) => {console.log(error)})
  }, [])

  return (<div>{avatar && <img src={avatar} alt="User Avatar'ı" />}</div>)
}
















/*

import {useState} from 'react';

export default function App() {
  const [avatar, setAvatar] = useState("");

  return (<div>{avatar && <img src={avatar} alt="User Avatar'ı" />}</div>)
}


*/