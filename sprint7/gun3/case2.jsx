//Checkbox’a tıklandığında, hobiler array'ine eklenecek ya da çıkarılacak bir handleChange fonksiyonu yaz. 
//Eğer checkbox işaretliyse hobiyi array'e ekle(setHobbies); değilse, array'den çıkar. 

//- İpucu: spread operatörü , includes ve filter metodunu kullanabilirsin.

import { useState } from "react";

const [hobbies, setHobbies] = useState();


let newValue;

function handleChange(event) {

    if (event.target.type === "checkbox") {

        if(hobbies.includes(event.target.vaule)) {
            newValue = hobbies.filter( (h) => { h !== event.target.value }); //işaretlenen haricindeki tüm hobileri listeler.
        } else {
            setHobbies([...hobbies, event.target.value]);
        }

    } else {
        newValue = event.target.value // bu kod yazılmasa da sorunun yanıtı doğru almıştır.
    }

    
}