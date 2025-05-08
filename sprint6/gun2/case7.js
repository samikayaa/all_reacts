//Aşağıdaki kodda App component’i içerisindeki state’i kullanarak, her tıklamada sayacı bir artır. Gerekli propları Counter component'ine gönder.

//App.js

import {useState} from 'react';
import Counter from './Counter.js';

export default function App() {
  const [count, setCount] = useState(0); 
  
  function increment (){ 
      setCount(count+1);
   };

  return <Counter count={count} increment={increment}/>; 
}

//Counter.js

const Counter = (props) => { 
  const { count, increment } = props;
   return <button onClick={increment}>Say: {count}</button>; 
};

export default Counter;

