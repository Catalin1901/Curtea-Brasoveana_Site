import styled  from 'styled-components'
import {Link} from 'react-router-dom'

export const Button = styled(Link)`
background: ${({primary}) => (primary ? '#000d1a' : 'CD853F')};
white-space: nowrap;
outline: none;
border: none;
min-width: auto;
max-width: auto;
cursor: pointer;
text-decoration: none;
transition: 0.3s;
display: flex;
justify-content: center;
text-shadow: 
-0.5px -0.5px 0 black,
 0.5px -0.5px 0 black,
-0.5px 0.5px 0 black,
 0.5px 0.5px 0 black;
align-items: center;
padding: ${({big}) => (big ? '1vh 2vh' : '0.8vh 1.6vh')};
color: ${({primary}) => (primary ? '#fff' : '#000d1a')};
font-size: ${({big}) => (big ? '24px' : '12px')};
margin-left: 20px;
&:hover {
    transform: translateY(-5px);
}

`;