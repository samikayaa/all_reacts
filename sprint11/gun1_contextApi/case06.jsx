/*
Aşağıdakli "Eğitim Platformu" uygulamasında, 
`Profile` bileşeninde `useContext` Hook'unu kullanarak 
`ThemeContext`'teki tema bilgisine eriş ve bu bilgiyi ekranda göster.
*/


import React, { createContext, useContext } from "react";


const ThemeContext = createContext();




function Profile() {

    const theme = useContext(ThemeContext) // BURASI ÇOK ÖNEMLİ!! SÜSLÜ PARANTEZ KULLANMADIĞIMIZDA
    // theme bilgisi destructure edilmeden kullanılmış olur....

    return <p>Tema: {theme}</p>;
}


export default function App() {
    return (
        <ThemeContext.Provider value="light">
            <Profile />
        </ThemeContext.Provider>
    );
}

