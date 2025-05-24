/*
Eğlence değerine sahip yeni bir checkbox ekle. 

1- Seçilen aktiviteleri saklamak için activities adında bir state tanımla. 
- import ve başlangıç değerine dikkat. 

2- handleActivityChange isimli bir fonksiyon yaz. 
- Event objesini alsın. - checked ve value değerini destructed ederek event.target'ten al. 
- Eğer checked ise state'deki array'e ekle. (Array'in spread ile kopyasını almayı unutma) 
- checked değil ise filter ile state'den çıkar. 

3- State'deki değerleri aşağıdaki component olarak ul element'inin içinde map'le. 
- Key değerini vermeyi unutma.

<li>{activity}</li>
*/

import { useState } from "react";


export default function App() {

    const [activities, setActivities] = useState([]);

    const handleActivityChange = (event) => {
        const {checked, value} = event.target;

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
            {
                activities.map( (activity) => (
                    <li key={activity}>{activity}</li>
                ))
            }
          </ul>
        </div>
      </div>
    );
  }

  