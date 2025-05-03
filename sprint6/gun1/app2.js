/*

Eğitim platformunuzda ders kartı (CourseCard) komponenti oluşturuyorsunuz. 
Aşağıdaki JSX kodunda hata ve eksikler var. Düzelt.

function CourseCard() {
 const isPublished = true;


 return (
   <div class="card">
     <h2>"React Temelleri"</h2>
     <p>{if(isPublished) { "Yayında" } else { "Taslak" }}</p>
     <button onclick="handleStatus()">Yayınla/Yayından Kaldır</button>
   </div>
 )
}

*/


function CourseCard() {
    const [isPublished, setIsPublished] = useState(true);

    function handleStatus() {
        setIsPublished(!isPublished);
    }

    return (
        <div className="card">
          <h2>React Temelleri</h2>
          <p>{isPublished ? "Yayında" : "Taslak"}</p>
          <button onClick={handleStatus}>Yayınla/Yayından Kaldır</button>
        </div>
      )
}
   

