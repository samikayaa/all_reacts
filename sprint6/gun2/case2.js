    //export default function App() --> A harfi büyük olduğunda bu bir component oluyor!

//App.js
import {useState} from 'react';
import Child from './Child.js';

export default function App() {
    const [text, setText] = useState("Merhaba!"); 
   
   const updateText = () => { 
     setText("React'e hoş geldiniz!"); 
   }; 

   return ( 
     <div>
       <Child data={text} /> 
      <button onClick={updateText}>Güncelle</button>
    </div> 
   ); 

}


//Child.js
export default Child(props) => {
    const { data } = props;
  return (<h1>{data}</h1>);
  };
  