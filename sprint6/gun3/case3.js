// SORU: Categories component'i mount olduğunda 
// https://api.example.com/category adresine get isteği atıp aldığı response'da gelen veriyi(data) categories state'ine ekleyen kodu yaz. 

//- İpucu: import'ları unutma

/*

import {useState} from 'react';
import CatergoryList from './CatergoryList.js';


export default function Categories () {
 const [categories, setCategories] = useState([]);


 return (
   <CatergoryList categories={categories} />
 )
}

*/


import {useState} from 'react';
import CatergoryList from './CatergoryList.js';
import axious from 'axious'; //axious kütüphanesini import ediyoruz.


export default function Categories() {
 const [categories, setCategories] = useState([]);

    useEffect( () => {
        axious
        .get('https://api.example.com/category')
        .then( (response) => {
            setCategories(response.data)
        })
        .catch( (error) => {console.log(error)})
    }, [] ) //soruda mount olduğunda dediği için boş bırakıldı. (render sonrası sadece 1 kere çalışması) or (tiyatro oyuncusunun sahneye ilk kez çıkışı)


 return (
   <CatergoryList categories={categories} />
 )
 }