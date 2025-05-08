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

// Burada amacım APP COMPONENTİNDEN CHILD KOMPONENTİNE state'i doğru bir şekilde göndermektir.
// Bu sayede butona tıkladığımda state güncelleniyor. Yani yeni texti görüyorum. 

//Child.js
export default Child(props) => {
    const {data} = props;
  return (
            <div>
                {data}
            </div>);
  };

