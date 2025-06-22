/*

date-fns kütüphanesini kullanarak bugünün tarihini dd/MM/yyyy formatında görüntüle. 
    - today değişkenini bugünün tarihi yap. 
    - format metodunu kullan. 
    - formattedDate'i bugünün tarihini dd/MM/yyyy formatına dönüştürmek için kullan.

*/

import { format } from "date-fns";


export default function App() {
    const today = new Date();    // today değişkeninin tarihi bugün yapıldı
    const formattedDate = format(today, "dd/MM/yyyy");    // format metodu kullanıldı ve dd/MM/yyyy eklendixs
    return <h1>Bugünün tarihi: {formattedDate}</h1>
}
