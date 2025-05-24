//Doğa Sporları değerine sahip bir checkbox ekle. 
//- Seçilen hobileri selectedHobbies adında bir state ile yönet. Ekranda seçilen hobilerin sayısını göster. 
//- handleHobbyChange fonksiyonunu tamamla. 
//- Seçilen hobi sayısını p element'inde göster.

import { useState } from "react";

export default function App() {

  const [selectedHobbies, setSelectedHobbies] = useState([]);

  const handleHobbyChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
        setSelectedHobbies([...selectedHobbies, value])
    } else {
        
    }
  };

  return (
    <div>
      <h3>Hangi hobileriniz var?</h3>
      <form>
        <label>
          <input
            type="checkbox"
            name="hobby"
            value="Yoga"
            onChange={handleHobbyChange}
          />
          <span>Yoga</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="hobby"
            value="Doğa Yürüyüşleri"
            onChange={handleHobbyChange}
          />
          <span>Doğa Yürüyüşleri</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="hobby"
            value="Doğa Sporları"
            onChange={handleHobbyChange}
          />
          <span>Doğa Sporları</span>
        </label>
      </form>
      <div>
        <h4>Seçilen Hobi Sayısı:</h4>
        <p>
        
        </p>
      </div>
    </div>
  );
}



//yanıt: 

/*
import { useState } from "react";


export default function App() {
 const [selectedHobbies, setSelectedHobbies] = useState([]);


 let newValue;
 const handleHobbyChange = (event) => {
   const { value, checked } = event.target;
   if (checked) {
     if (selectedHobbies.includes(value)) {
       newValue = selectedHobbies.filter(
         (selectedHobby) => selectedHobby !== value
       );
     } else {
       newValue = [...selectedHobbies, value];
     }
   } else {
     newValue = selectedHobbies.filter(
       (selectedHobby) => selectedHobby !== value
     );
   }
   setSelectedHobbies(newValue);
 };


 return (
   <div>
     <h3>Hangi hobileriniz var?</h3>
     <form>
       <label>
         <input
           type="checkbox"
           name="hobby"
           value="Yoga"
           onChange={handleHobbyChange}
         />
         <span>Yoga</span>
       </label>
       <label>
         <input
           type="checkbox"
           name="hobby"
           value="Doğa Yürüyüşleri"
           onChange={handleHobbyChange}
         />
         <span>Doğa Yürüyüşleri</span>
       </label>
       <label>
         <input
           type="checkbox"
           name="hobby"
           value="Doğa Sporları"
           onChange={handleHobbyChange}
         />
         <span>Doğa Sporları</span>
       </label>
     </form>
     <div>
       <h4>Seçilen Hobi Sayısı:</h4>
       <p>{selectedHobbies.length}</p>
     </div>
   </div>
 );
}

*/