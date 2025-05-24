//State'deki activity'leri ul element'inin içinde aşağıdaki component gibi map'leyin.
//Key değerini vermeyi unutmayın.

// <li>{activity}</li>

import React, { useState } from "react";


export default function App() {
 const [activities, setActivities] = useState([]);


 const handleActivityChange = (event) => {
   const { value, checked } = event.target;
   if (checked) {
     setActivities([...activities, value]);
   } else {
     setActivities(activities.filter((activity) => activity !== value));
   }
 };


 return (
   <div>
     <h3>Hangi aktiviteleri seviyorsunuz?</h3>
     <form>
       <label>
         <input
           type="checkbox"
           name="activity"
           value="Müzik Dinleme"
           onChange={handleActivityChange}
         />
         <span>Müzik Dinleme</span>
       </label>
       <label>
         <input
           type="checkbox"
           name="activity"
           value="Film İzleme"
           onChange={handleActivityChange}
         />
         <span>Film İzleme</span>
       </label>
       <label>
         <input
           type="checkbox"
           name="activity"
           value="Eğlence"
           onChange={handleActivityChange}
         />
         <span>Eğlence</span>
       </label>
     </form>
     <div>
       <h4>Seçilen Aktiviteler:</h4>
       <ul>
            {   //map'ledik ve key değeri verdik;
                activities.map( (activity) => (
                    <li key={activity}>{activity}</li>
                )) 
                
            }
            
       </ul>
     </div>
   </div>
 );
}
