/*
Aşağıda tanımlanmış olan reducer'ları redıx store'da kullanmak için birleştir. 
- birleştirilmiş reducer'un ismi reducer olsun. 
- userReducer'ı user, postsReducer'ı posts key'ini kullan. 
- named export olsun.
*/

import { combineReducers } from "redux"; //bunu yazdım.

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

const postsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [...state, action.payload];
        default:
            return state;
    }
};

export const reducer = combineReducers({
    user: userReducer,
    posts: postsReducer,
});

/*
  export const reducer = combineReducers({
    user: userReducer,
    posts: postsReducer,
  });
*/