/*

Bir pizza sipariş web sitesinde, sipariş verildiğinde ekranda sipariş zamanını göstersin. 
    - Sipariş Zamanı: 1 Ocak 2025 18:15 metnini ekranda gösterecek şekilde order fonksiyonunu tamamla. 
    - now isimli değişkende bugünün tarihini sakla. 
    - formattedDate isimli değişkende tarihi formatla. (Dikkat: gün tek basamak, türkçe, 24 saat gösterimi ile) 
    (İpucu: locale ayarını kullanabilirsin. tr'yi import etmeyi unutma) 
    - orderDate state'ine formattedDate'i ekle.

*/

import { useState } from 'react';

import { format } from "date-fns";
import { tr } from "date-fns/locale";

import './tailwind.css';

export default function App() {
    const [orderDate, setOrderDate] = useState();

    function order() {
        const now = new Date();
        const formattedDate = format(now, "d-MM-yyyy-mm-ss", { locale: tr })
        setOrderDate(formattedDate)
    }

    return <div>
        <button onClick={order}>Sipariş Ver</button>
        {orderDate && (
            <div>
                Sipariş Zamanı: {orderDate}
            </div>
        )
        }
    </div>
}
