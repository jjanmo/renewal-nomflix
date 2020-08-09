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
        font-family: 'Acme', sans-serif;
        background-color : #1B374B;
        color : white;
        padding-top : 100px;
        @media (max-width : 1280px) {
            padding-top : 70px;
        }
	}
    a {
        text-decoration: none;
        color :inherit;
    }
`;

export default GlobalStyles;
