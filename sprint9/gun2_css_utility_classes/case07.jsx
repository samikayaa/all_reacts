/*

Bir blog yazarının paylaştığı makelenin kaç gün önce paylaşıldığını ekranda göster. 
    - publishDate isimli bir değişkende yayınlanma tarihi olan 2025-01-01'i JS date'e dönüştür. 
    - dateDifference isimli bir değişkende formatDistanceToNow metodunu kullanarak kaç gün önce paylaşıldığını hesapla. 
    - formatDistanceToNow metodunda 6 gün önce gibi metnin oluşması için 
        addSufffix özelliğini ve locale ayarını ayarlamayı unutma. 
    - Dikkat: importları unutma.
SA.

*/

import './tailwind.css';
import { format, addDays, formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale"; // Türkçe dil desteği


export default function App() {

    const today = new Date();
    const publishDate = new Date(2025, 1, 1);

    const dateDifference = formatDistanceToNow(publishDate, {
        addSufffix: true,
        locale: tr,
    })

    return (
        <div>
            Paylaşılma Zamanı: {dateDifference}
        </div>
    )

}

