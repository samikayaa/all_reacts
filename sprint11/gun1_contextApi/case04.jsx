/*Aşağıdaki kodda, Profile bileşeninde useContext ile UserContext'e 
erişilmeye çalışılıyor ancak hata alınıyor. Düzelt
*/


//App.js

export default function App() {
    return <h1>Hello world</h1>
}


//Profile.js
import { useContext } from "react";
import { UserContext } from "./App.js";

export default function Profile() {
    const { user } = useContext(UserContext);
    return <p>Kullanıcı: {user}</p>;
}
