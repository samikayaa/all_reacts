

/*
Bir eğitim platformunda, öğrencinin tamamladığı derslerin bir listesi `useReducer` hook'u ile yönetiliyor. 
Reducer hook'u için aşağıda önerilen best practice'leri uygulayın. 

1- actions.js dosyasında action'lar için action type constant oluştur. 
 - Değişkenin adı upper case snake case yazılır. 
 - export edilir. * reducer fonksiyonunda case'ler tanımlamak için kullanılır. 
 
2- actions.js dosyasında action creater function yaz. 
 - Fonksiyon ismi camel case yazılır. 
 - action objesini(örn: {type: ADD_COURSE, payload: {name: "Fonksiyonlar"}) return eder. 
 
* dispatch yaparken, action objesini oluşturmak için kullanılır. 

3- reducer.js dosyasında reducer fonksiyonunu oluştur ve case'leri action type constant olarak ver. 
 - state'i immutable kullan. 4- dispatch ederken action creater function ile oluşturulan action objelerini kullan.

*/

//App.js
import React, { useReducer, useState } from "react";
import { reducer } from "./reducer.js";
import { addCompletedCourse } from "./action.js"

const initialState = { completedCourses: [] };

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [courseName, setCourseName] = useState("");

    const handleAddCourse = () => {
        dispatch(addCompletedCourse(courseName));
        setCourseName("");
    };

    return (
        <div>
            <ul>
                {state.completedCourses.map((course, index) => (
                    <li key={index}>{course} -completed</li>
                ))}
            </ul>
            <input
                type="text"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
            />
            <button onClick={handleAddCourse}>
                Dersi Tamamlandı Olarak İşaretle
            </button>
        </div>
    );
}


//action.js
import React, { useReducer } from 'react';

export const ADD_COMPLETED_COURSE = "ADD_COMPLETED_COURSE";

const addCompletedCourse = (courseName) => {
    return { type: ADD_COMPLETED_COURSE, payload: { name: courseName } }
}


//reducer.js
import { ADD_COMPLETED_COURSE } from "./actions.js"

export function reducer(state, action) {
    switch (action.type) {
        case ADD_COMPLETED_COURSE:
            return {
                ...state,
                completedCourses: [...state.completedCourses, action.payload],
            };
        default:
            return state;
    }
}



