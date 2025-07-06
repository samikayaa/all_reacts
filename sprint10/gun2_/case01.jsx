/*
Bir Video sitesi için redux uygulaması yapılıyor. 
Import'u yapılmıuş favoriteReducer ile bir store oluşturun ve named export yapın.
*/

import { favoriteReducer } from "./reducers/index.js"
import { configureStore } from "@reduxjs/toolkit"


export const store = configureStore({
    reducer: {
        favorites: favoriteReducer,
    },
});
