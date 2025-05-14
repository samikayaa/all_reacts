//App component'inde kullanılan Button component'ini styled-component ile tanımlayın.


import styled from 'styled-components';

const Button = styled.button`
    width: ${props => props.width}
`

export default function App(){
 return (
   <Button width="100px">KAydet</Button>
 )
}


/*
2. ÇÖZÜM: 

import styled from 'styled-components';

const Button = styled.button`
    width: 100px;
`
export default function App(){
 return (
   <Button>KAydet</Button>
 )
}
*/







/*
ORJ. SORU:

import styled from 'styled-components';

export default function App(){
 return (
   <Button width="100px">KAydet</Button>
 )
}

*/