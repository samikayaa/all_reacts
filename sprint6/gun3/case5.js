// SORU:

// 1- accounts state'inde sadece admin rolüne sahip olan hesdapları filtrele ve admins isimli bir değişkende sakla. 
// 2- ul element'i içinde admins için .map yap. 
// Item component'ini kullan ve her bir item'ı user porp'u olarak gönder. Key değerini unutma(index). 

//- .map'de tanımlayacağın callback function'da return kullanma! 
//- .map'de tanımlayacağın callback function'da parametreleri item ve index olarak tanımla.


import {useState} from 'react';
import Item from './Item.js';


export default function Liste(){
 const [accounts, setAccounts] =useState([
   { name: "Emre", role: "admin"}, 
   { name: "Fatih", role: "super-user"}, 
   { name: "Emir", role: "admin"}, 
   { name: "Harun", role: "user"}
 ])

 //let admins = []; önden tanıma ihtiyaç kalmadan aşağıdaki kod ile tek satırda bu iş halledilebilir.
 const admins = acoount.filter( (i) => i.role === "admin")

 return (<ul>
    { admins.map( (name, index) => (
        <Item name={name} key={index} />
    ) ) }
 </ul>)
}









/*

import {useState} from 'react';
import Item from './Item.js';


export default function Liste(){
 const [accounts, setAccounts] =useState([
   { name: "Emre", role: "admin"}, { name: "Fatih", role: "super-user"}, { name: "Emir", role: "admin"}, { name: "Harun", role: "user"}
 ])


 return (<ul></ul>)
}


*/