// Aşağıdaki uygulama çalışmıyor. App.js ve Geeting.js dosyalarında gerekli düzeltmeleri yap. 
// - Props destructuring yaparak prop'u al.

/*
App.js

export default function App() {
  return <Greeting message="Merhaba, React!" />; 
}

Greeting.js

const Greeting = () => { 

return <h1>XXX</h1>;
 };
*/


//App.js
import Greeting from './Greeting.js'

export default function App() {
  return <Greeting message="Merhaba, React!" />; 
}

//Greeting.js
const Greeting = (props) => { 
    const {message} = props;
return <h1>{message}</h1>;
 };

export default Greeting;