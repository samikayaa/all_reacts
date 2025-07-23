/*
Bir "Yazılımcı Portfolyosu" uygulamasında, 
arayüzün içerik bilgisini (Türkçe/İngilizce içerik) yönetmek için Context API kullan. 

- `LanguageContext` adında bir context oluştur. 
- `App` bileşeninde `LanguageContext.Provider` ile varsayılan olarak "translationData" objesini sağla.
*/


import React, { createContext } from "react";
import translationData from "./translationData.json";
import Header from "./Header.js";
// örnek translation data {tr: {...}, en: {..}}



function App() {

    const LanguageContext = createContext();

    return (

        <div>
            <LanguageContext.Provider value={translationData}>
                <Header />
            </LanguageContext.Provider>
        </div>
    );
}