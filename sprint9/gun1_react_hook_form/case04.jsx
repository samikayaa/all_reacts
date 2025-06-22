import { toast, ToastContainer } from "react-toastify"; //toast import etmek!
import "react-toastify/dist/ReactToastify.css";

export default function App() {
    const bildirimGoster = () => {
        toast("Siparişiniz başarıyla alınmıştır!"); //içinde yazan texti tanımlamak.
    };

    return (
        <div>
            <button onClick={bildirimGoster}>Sipariş Ver</button>
            <ToastContainer /> {/*koda dahil etmek.*/}
        </div>
    );
}
