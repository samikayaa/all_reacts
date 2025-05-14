//styled-component ile hazırlanmış Button'u App component'inde form içinde kullan. 

//- Butonda Kaydet yazsın. 
//- Arkaplan rengi yeşil olsun.

import styled from 'styled-components';

const Button = styled.button`
 background-color: ${props => props.bgColor || "blue"}
`

export default function App(){
 return (
   <form id="newsletter">
     <input name="email" />
     <Button bgColor="green">Kaydet</Button>
   </form>
 )
}





/*
ORJ. SORU:

import styled from 'styled-components';

const Button = styled.button`
 background-color: ${props => props.bgColor || "blue"}
`

export default function App(){
 return (
   <form id="newsletter">
     <input name="email" />
   </form>
 )
}

*/