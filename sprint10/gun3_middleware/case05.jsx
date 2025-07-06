/*
Aşağıdaki thunk action'ı tamamla. 

1- fetchData action'ı ilk olarak state'i loading'e almalı. 
- başlangıçta FETCH_DATA_LOADING tipinde action dispatch et. 

2- axios ile https://api.example.com/data adresinden data çekmeli. 
- success aldığında FETCH_DATA_SUCCESS tipinde bir action dispatch etmeli. 
payload olarak response'da gelen data'yı vermeli. 
- hata aldığında FETCH_DATA_ERROR tipinde bir action dispatch etmeli. 
payload olarak error objesindeki message'ı vermeli.

*/


import axios from "axios";

export const FETCH_DATA_LOADING = "Fetching is in progress";
export const FETCH_DATA_SUCCESS = "Fetch job succeeded";
export const FETCH_DATA_ERROR = "Fetch job got error";


export const fetchData = () => (dispatch) => {
    dispatch({ type: 'FETCH_DATA_LOADING' });
    axios.get('https://api.example.com/data')
        .then((response) => {
            dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
        })
        .catch((error) => {
            dispatch({ type: 'FETCH_DATA_ERROR', payload: error.message });
        })
};

