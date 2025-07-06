/*

immutability kavramı

*/




/*

Reducer, bir fonksiyondur.
Şu şekilde çalışır:
(state, action) => newState
Yani bir önceki state ve gelen action’a göre yeni bir state döner. 
Bu fonksiyonun temel özelliği: pure function (saf fonksiyon) olmasıdır — dış etkenlerden bağımsızdır.





useReducer Temel Örnek:

import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="text-center p-4">
      <p>Sayı: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Artır</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Azalt</button>
    </div>
  );
}


                            💬 useState vs useReducer
Durum	                    useState	    useReducer
Basit state	                ✅ Uygun	       🚫 Gereksiz karmaşık
Bağlantılı/çoklu state	    🚫 Zorlaşır	    ✅ Avantajlı
State geçmişini yönetmek	🚫 Zor	        ✅ Kolay
Action bazlı mantık	        🚫 Uygun değil	✅ Uygun



🧩 Reducer yapısı neleri içerir?
initialState – başlangıç verisi
reducer fonksiyonu – state güncelleme mantığı
dispatch fonksiyonu – action tetikleme mekanizması

*/