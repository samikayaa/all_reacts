/*
Aşağıdaki uygulamayı inceleyin. 
- Sıcak veya Soğuk seçenekleri seçili değil ise div.soru2 görünmemeli. (mantıksal operatör kullan) 
- Sıcak veya Soğuk seçimine göre ekranda sadece ilgili seçenekler görünsün. (ternary operatör kullan)
*/


import { useState } from "react";

export default function App() {
  const [temperature, setTemperature] = useState("");
  const [drink, setDrink] = useState("");

  const handleTemperatureChange = (event) => {
    setTemperature(event.target.value);
    setDrink(""); 
  };

  const handleDrinkChange = (event) => {
    setDrink(event.target.value);
  };

  return (
    <div className="soru1">
      <h3>İçecek sıcaklığı seçin:</h3>
      <form id="temperature">
        <label>
          <input
            type="radio"
            name="temperature"
            value="Sıcak"
            onChange={handleTemperatureChange}
          />
          Sıcak
        </label>
        <label>
          <input
            type="radio"
            name="temperature"
            value="Soğuk"
            onChange={handleTemperatureChange}
          />
          Soğuk
        </label>
      </form>
      {temperature && (
        <div className="soru2">
          <h4>{temperature} içecek seçin:</h4>
          <form id="drinks">
            {temperature==="Sıcak" ? (
              <>
                <label>
                  <input
                    type="radio"
                    name="hotDrinks"
                    value="Çay"
                    onChange={handleDrinkChange}
                  />
                  Çay
                </label>
                <label>
                  <input
                    type="radio"
                    name="hotDrinks"
                    value="Kahve"
                    onChange={handleDrinkChange}
                  />
                  Kahve
                </label>
                </>) 
              : (  
                <>
                <label>
                  <input
                    type="radio"
                    name="coldDrinks"
                    value="Limonata"
                    onChange={handleDrinkChange}
                  />
                  Limonata
                </label>
                <label>
                  <input
                    type="radio"
                    name="coldDrinks"
                    value="Soda"
                    onChange={handleDrinkChange}
                  />
                  Soda
                </label>
          </>)}
          
          </form>
        </div>
      )}
      {drink && <p>Seçilen İçecek: {drink}</p>}
    </div>
    
  );
}
