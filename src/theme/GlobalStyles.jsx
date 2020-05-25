
import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`

* {
	text-decoration: none;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	list-style-type: none;
	text-align: center;
}

html {
	font-family: 'Arimo', sans-serif;
}

body {
	background-color: #e2e0e0;
	position: relative;
	overflow-x: hidden;
	margin: 20px 0;
}
`;

export default GlobalStyles;
