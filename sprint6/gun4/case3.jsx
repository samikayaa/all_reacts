//styled-component ile hazırlanmış Container'ı App component'inde div#notify içinde kullan. 

//- İçinde Hello yazsın. 
//- Arkaplan rengi kırmızı olsun.


import styled from 'styled-components';

const Container = styled.div`
 background-color: ${props => props.active ? "green" : "red"}
`

export default function App(){
 return (
   <div id="notify">
    <Container active={false}>Hello</Container>
   </div>
 )
}


/*
ORJ. SORU:

import styled from 'styled-components';

const Container = styled.div`
 background-color: ${props => props.active ? "green" : "red"}
`

export default function App(){
 return (
   <div id="notify">
   
   </div>
 )
}

*/