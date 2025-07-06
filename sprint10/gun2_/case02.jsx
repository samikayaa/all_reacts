/*
Aşağıdaki uygulamada redux geçişi yapılmış ama state'deki age bilgisi redux state'inden düzgün gelmiyor. 
Hatayı düzelt.
*/

import { useDispatch, useSelector } from "react-redux";


export default function App() {
    const age = useSelector(state => state.age);


    const dispatch = useDispatch();


    function handleAge() {
        dispatch({ type: "yas_arttir" });
    }


    function handleAgeDown() {
        dispatch({ type: "yas_azalt" });
    }


    return (
        <div>
            <h1>{age}</h1>
            <button onClick={handleAge}>Yaşı arttır</button>
            <button onClick={handleAgeDown}>Yaşı azalt</button>
        </div>
    );
}
