/*
Eğitim platformunuz için basit bir dersi tamamlama komponenti oluşturun. 
Komponent şunları içermeli: 
- Tamamlanma durumu (state olarak tutulacak): isCompleted. 
- toggleCompletion fonksiyonu buton tıklanınca tamamlanma değerini true veya false olarak değiştirecek. 
- Tamamlandı ise ✅ Tamamlandı, değil ise 📝 Devam Ediyor yazmalı.(Hep ternary if kullan) 
- Buton, tamamlanma durumuna göre farklı stil olmalı: btn-completed veya btn-pending. 
- buton'da Tamamla veya Geri Al yazmalı.
*/

export default function App() {

   const toggleCompletion = () => {
   
  };
  
  return (
    <div className={`course-item ${"completed"}`}>
      <h3>Workintech Full Stack Programı</h3>
      <div className="status">
        <span>{"✅ Tamamlandı" + "📝 Devam Ediyor"}</span>
        <button
          onClick={toggleCompletion}
          className={"btn-completed btn-pending"}
        >{"Tamamla"}
        </button>
      </div>
    </div>
  );
}

