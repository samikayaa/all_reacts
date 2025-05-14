//h1 element'ini styled-components kullanarak Title isimli bir component'e dönüştür ve kullan. 
//- import'u unutma!

import styled from 'styled-components';

const Title = styled.h1`
    padding: 1rem;
    border-radius: 0.8rem;
    background-color: lightcoral;
    text-align: center;
`


export default function App() {
    return (
      <Title>Hello styled-components!</Title>
    )
}
   


/*
ORJ. SORU:

export default function App() {
 return (
   <h1 style={{
   padding: "1rem",
   borderRadius: "0.8rem",
   backgroundColor: "lightcoral",
   textAlign: "center"}}>Hello styled-components!</h1>
 )
}

*/