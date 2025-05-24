/*
Value değeri limonata olan bir radio button ekle. 
- Radio buttonları favBeverage attribute'u ile gruplandırın. 
- Seçimi favBeverage isimli bir state'de tut. 
- handleBeverageChange fonksiyonunu tamamla. 
- Eğer bir seçim yapılmadı ise Seçim yapılmadı!, 
    yapıldı ise Favori içeceğiniz: XXX metnini p elementinde göster. (ternary operatör kullan)
*/

import { useState } from "react";


export default function App() {

const [favBeverage, setFavBeverage] = useState();

const handleBeverageChange = (event) => {
    setFavBeverage(event.target.value)
};

return (
<div>
    <h3>Favori içeceğiniz nedir?</h3>
    <form>
    <label>
        <input
        type="radio"
        name="favBeverage"
        value="Gazoz"
        checked={favBeverage === "Gazoz"}
        onChange={handleBeverageChange}
        />
        Gazoz
    </label>
    <label>
        <input
        type="radio"
        name="favBeverage"
        value="Ayran"
        checked={favBeverage === "Ayran"}
        onChange={handleBeverageChange}
        />
        Ayran
    </label>
    <label>
        <input
        type="radio"
        name="favBeverage"
        value="Limonata"
        checked={favBeverage === "Limonata"}
        onChange={handleBeverageChange}
        />
        Limonata
    </label>
    </form>
    <p>
    Favori içeceğiniz: {favBeverage ? {favBeverage} : "Seçim yapılmadı."} 
    </p>
</div>
);
}


