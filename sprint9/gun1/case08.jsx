/*

Bir pizza siparişi başarıyla tamamlandığında kullanıcıya başarı bildirimi göstermek için;
    React Toastify'ı kullanın. 
Bildirimin mesajı Siparişiniz başarıyla oluşturuldu! olsun.

*/


import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

export default function App() {
    const siparisiTamamla = () => {
        toast("Siparişiniz başarıyla alınmıştır!"); //içinde yazan texti tanımlamak.
        console.log("Sipariş tamamlandı.");
    };

    return (
        <div>
            <button onClick={siparisiTamamla}>Siparişi Tamamla</button>;
            <ToastContainer /> {/*koda dahil etmek.*/}
        </div>
    );
}


