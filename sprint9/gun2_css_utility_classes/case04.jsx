/*

date-fns kütüphanesini kullanarak şu anki tarihe 5 gün ekley ve sonucu "yyyy-MM-dd" formatında görüntüle. 
    - today değişkenini bugünün tarihi yap. 
    - addDays metodunu kullanarak 5 gün sonrasını futureDate isimli değişkende sakla. 
    - formattedDate isimli değişkende hesaplanan tarihi class="code">yyyy-MM-dd formatına dönüştür. 
    - 5 Gün sonrası: 1970-01-01 şeklinde h1 element'inde göster.

*/

import './tailwind.css';
import { format, addDays } from "date-fns";


export default function App() {

    const today = new Date();
    const futureDate = addDays(today, 5);
    const formattedDate = format(futureDate, "yyyy-MM-dd")

    return <h1 class="code">5 Gün sonrası: {formattedDate}</h1>
}
