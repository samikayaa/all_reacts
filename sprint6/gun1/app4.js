/*
Eğitim platformunuz için basit bir dersi tamamlama komponenti oluşturun. 
Komponent şunları içermeli: 
- Tamamlanma durumu (state olarak tutulacak): isCompleted. 
- toggleCompletion fonksiyonu buton tıklanınca tamamlanma değerini true veya false olarak değiştirecek. 
- Tamamlandı ise ✅ Tamamlandı, değil ise 📝 Devam Ediyor yazmalı.(Hep ternary if kullan) 
- Buton, tamamlanma durumuna göre farklı stil olmalı: btn-completed veya btn-pending. 
- buton'da Tamamla veya Geri Al yazmalı.
*/

import { useState } from "react";

export default function App() {

   const [isCompleted, setIsComplated] = useState(true)

   const toggleCompletion = () => {
    setIsComplated(!isCompleted);
  };


  
  return (
    <div className={`course-item ${"completed"}`}>
      <h3>Workintech Full Stack Programı</h3>
      <div className="status">
        <span>{isCompleted ? "✅ Tamamlandı" : "📝 Devam Ediyor"}</span>
        <button onClick={toggleCompletion} className={isCompleted ? "btn-completed" : "btn-pending"}>
        {!isCompleted ? "Tamamla" : "Geri Al"}
        </button>
      </div>
    </div>
  );
}

