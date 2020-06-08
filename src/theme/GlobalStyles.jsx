
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
	font-family: 'Noto Sans JP', sans-serif;
}

body {
	background: #c0c0c0; 
	position: relative;
	overflow-x: hidden;	
	min-height: 100vh;
	color: #707070;
	@media only screen and (min-width: 1000px)  {
		 background: linear-gradient(135deg, #c8c8c8 15%, #b9b9b9 40%, #787878 40.1%, #787878 40.1%, #ededed 40.5%);
		 background-repeat: no-repeat;
	}
}

html, body {
	@media print {
	background-color: #fff;
	margin: 0;
	}
}

@page {
	size: A4 portrait;
}
`;

export default GlobalStyles;
