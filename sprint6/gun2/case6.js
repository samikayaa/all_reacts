//Aşağıdaki kodda App component’i içerisinde handleClick fonksiyonunu yazarak, 
//prop olarak Button component'ine yolla ve butona tıklandığında konsola "Merhaba, React!" yazdırılmasını sağla.


import Button from './Button.js';

export default function App() {

  function handleClick() {
    console.log("Merhaba, React!");
  }

  return <Button onClick={handleClick}/>; 
}

///////////////////////////////////////////////////////

import App from './App.js';

const Button = (props) => { 
  const {onClick} = props;
	return <button onClick={onClick}>Tıkla</button>;
 }; 

/*
App.js

import Button from './Button.js';
export default function App() {
  return <Button />; 
}

Button.js

const Button = (props) => { 
  const {onClick} = props;
	return <button onClick={onClick}>Tıkla</button>;
 }; 

export default Button;
*/

