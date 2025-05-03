/*
Aşağıdaki React uygulamasını tamamla. 
- State hookunu kullanarak bir showSpinner isimli state oluşturun. Bu state'in başlangıç değeri true olsun. 
- Spinner ekranda sürekli görünüyor, JSX'te gerekli düzenlemeyi yap. 
- Yardımcı fonksiyonu yaz. 
- Butona tıklandığında spinner göstermeli veya gizlemeli. buton üzerinde Gizle veya Göster yasın.
*/

import { useState } from "react";

export default function App() {

    const [showSpinner, setShowSpinner] = useState(true);

    const toggleDondurucu = () => {
        setShowSpinner(!showSpinner);
     };
   
     return (
       <div className="widget-spinner container">
         <h2>Spinner</h2>
         {
           showSpinner && (
             <div id="döndürücü" className="spinner">
                --+--
             </div>
           )
        
         }
         <button id="toggleDondurucu" onClick={toggleDondurucu}>
         {showSpinner ? "Gizle" : "Göster"}
         </button>
       </div>
     );
   }
   