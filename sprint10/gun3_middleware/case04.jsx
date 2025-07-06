/*

Aşağıdaki thunk action'ı tamamla. 
- hata aldığında FETCH_DATA_ERROR tipinde bir action dispatch etsin. 
- payload olarak error objesindeki message'ı göndersin.

*/



import axios from "axios";

export const fetchData = () => (dispatch) => {
    dispatch({ type: 'FETCH_DATA_LOADING' });
    axios.get('https://api.example.com/data')
        .then((response) => {
            dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
        })
        .catch((error) => {
            dispatch({ type: 'FETCH_DATA_ERROR', payload: error.message }); //bunu yazdım.
        })
};
