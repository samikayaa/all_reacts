/*
Aşağıdaki React uygulamasını tamamla. 
- State hookunu kullanarak bir sayac isimli state oluşturun. Bu state'in başlangıç değeri 0 olsun. 
- 'stil' nesnesinde 'color' özelliği sabit olarak "blue" olarak belirlenmiş. 
    Eğer sayı çiftse "royalblue", değilse "crimson" olacak şekilde kodu düzenle. 
- JSX'te bazı statik kodlanmış bilgiler var. 
    Buralarda süslü paranetezler içinde JS ifadeleri kullanarak dinamik hale getir. 
    Sayı çift ise ekranda Sayı: 0 çift sayıdır, 
    tek ise Sayı: 1 tek sayıdır metni görünecek şekilde kodu düzenle. 
    tek çift için ternary if kullan. 
- Yardımcı fonksiyonları yaz. Tıklandığında sayac'ı bir artırmalı veya azaltmalı. Reset'e tıklandığında state'i sıfırlamalı.

*/

import { useState } from "react";

export default function App() {
 
 const [sayac, setSayac] = useState(0)   

 const artirici = () => {
    setSayac(sayac + 1)
  };
  const azaltici = () => {
    setSayac(sayac - 1)
  };
  const reset = () => {
    setSayac(0)
  };

  const stil = {
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: sayac%2===0 ? 'royalblue' : 'crimson', //'blue',
  };

  return (
    <div className="widget-counter container">
      <h2>Sayaç</h2>
      <div id="sayici" style={stil}>Sayı: {sayac} {sayac%2===0 ? 'çift' : 'tek'} sayıdır</div>
      <div>
        <button id="artirici" onClick={artirici}>
          Artırıcı
        </button>
        <button id="decrement" onClick={azaltici}>
          Azaltıcı
        </button>
        <button id="resetCount" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
