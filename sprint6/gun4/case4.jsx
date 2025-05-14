//Button component'inin üzerine mouse ile gelince arkaplan rengi sarı olsun.

import styled from 'styled-components';

const Button = styled.button`
 border-radius: 10px;
 
 &:hover {
    background-color: yellow;
 }
`


/*
ORJ. SORU:

import styled from 'styled-components';

const Button = styled.button`
 border-radius: 10px;
 background-color: yellow;
`

*/