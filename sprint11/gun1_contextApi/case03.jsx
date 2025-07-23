/*Aşağıdaki fonksiyonel bileşende UserContext'teki verilere erişmek için 
gerekli useContext Hook'unu kullanarak user değişkenini tanımla.
*/



import { useContext } from "react";
import { UserContext } from "./UserContext.js";


const { user } = useContext(UserContext); //değişken tanımlandı.

export default function Profile() {
    return <div> </div>;
}
