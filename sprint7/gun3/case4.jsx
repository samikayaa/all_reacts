/*
Value değeri yeşil çay olan yeni bir radio button oluşturun. 
- Radio buttonlar aynı soruya ait olduğundan, birden fazla seçilememelidir. 
    Bunun için drinkPreference attribute'unu kullanarak gruplandırın. 
- selectedDrink isimli bir state'de seçimi saklayın. 
- handleDrinkChange fonksiyonunu tamamlayın. 
- Seçili içeceği ekranda dinamik olarak gösterin.
*/

import { useState } from "react";

export default function App() {

    const [selectedDrink, setSelectedDrink] = useState("");

    const handleDrinkChange = (event) => {
        setSelectedDrink(event.target.value) //seçilen değeri selectedDrink'e atıyor.
    };
  
    return (
      <div>
        <h3>En sevdiğiniz içecek hangisi?</h3>
        <form>
          <label>
            <input
              type="radio"
              name="drinkPreference"
              value="Kahve"
              checked={selectedDrink === "Kahve"} //seçilenin ne olduğunu kontrol ediyor!
              onChange={handleDrinkChange}
            />
            Kahve
          </label>
          <label>
            <input
              type="radio"
              name="drinkPreference"
              value="Çay"
              checked={selectedDrink === "Çay"} //seçilenin ne olduğunu kontrol ediyor!
              onChange={handleDrinkChange}
            />
            Çay
          </label>
          <label>
            <input
              type="radio"
              name="drinkPreference"
              value="Yeşil Çay"
              checked={selectedDrink === "Yeşil Çay"} //seçilenin ne olduğunu kontrol ediyor!
              onChange={handleDrinkChange}
            />
            Yeşil Çay
          </label>
        </form>
        <p>Seçtiğiniz içecek: {selectedDrink}</p>
      </div>
    );
  }
  