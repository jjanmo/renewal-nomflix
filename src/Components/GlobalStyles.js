import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    *{
        box-sizing: border-box;
        padding : 0;
        margin : 0;
    }
    body{
        font-family : "Motiva Sans", sans-serif;
        background-color : #1B374B;
        color : white;
        padding-top : 70px;
    }
    a {
        text-decoration: none;
        color :inherit;
    }
`;

export default GlobalStyles;
