/* Aşağıdaki counter hook'unu useLocalStorage hook'unu kullanarak localStorage'da sakla. 
    - Farklı counter'larda kullanabilmek için bu hook'da name parametresi tanımla. 
    - useLocalStorage hook'u aynı klasörde useLocalStorage.js dosyasında. 
        Bu hook'u kullanarak counter'ın değerini localStorage'da sakla. 
    - Gerekli import'u ekle ve gereksiz import'ları kaldır.
*/

import { useState } from 'react';


export function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(initialValue);

    return { count, increment, decrement, reset };
}
