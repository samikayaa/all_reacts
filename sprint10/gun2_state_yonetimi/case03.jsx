/*

Aşağıdaki redux uygulamasında Yaşı sıfırla butonunun çalışmasını sağla. 
- store.js dosyasında yas_sifirla case'i yarat. initialState'i return etsin. 
- App.js dosyasında handleAgeReset fonksiyonunda yas_sifirla için gerekli aksiyonu dispatch et.

*/


//App.js
import { useSelector, useDispatch } from "react-redux";

export default function App() {
    const age = useSelector((state) => state.age);

    const dispatch = useDispatch();

    function handleAge() {
        dispatch({ type: "yas_arttir" });
    }

    function handleAgeDown() {
        dispatch({ type: "yas_azalt" });
    }

    function handleAgeReset() {
        dispatch({ type: "yas_sifirla" }) //bunu yazdım.
    }

    return (
        <div>
            <h1>{age}</h1>
            <button onClick={handleAge}>Yaşı arttır</button>
            <button onClick={handleAgeDown}>Yaşı azalt</button>
            <button onClick={handleAgeReset}>Yaşı sıfırla</button>
        </div>
    );
}


//store.js
import { createStore } from "redux";

const initialState = { age: 0 };

function myReducer(state = initialState, action) {
    switch (action.type) {
        case "yas_arttir":
            return { ...state, age: state.age + 1 };
        case "yas_azalt":
            return { ...state, age: state.age - 1 };
        case "yas_sifirla":
            return { ...state, age: initialState.age }; //bunu yazdım.
        default:
            return state;
    }
}

export const myStore = createStore(myReducer);



//index.js
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { myStore } from "./store.js";
import { Provider } from "react-redux";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <Provider store={myStore}>
            <App />
        </Provider>
    </StrictMode>
);


