import React from 'react';
import styled from 'styled-components';
import MainContent from '../MainContent/MainContent';
import Header from '../Header/Header';

// styles start
const Wrapper = styled.div`
	position: relative;
	margin: 0 auto 30px;
	height: 29.7cm;
	width: 21cm;
	background-color: #fff;
	box-shadow: 5px 7px 13px 4px #999999;
	display: flex;
    flex-direction: column;

	@media print {
		border: 1px solid #55B9F39C; 
		box-shadow: none;
		margin: 0 auto;
		border-radius: 11px;
		overflow: hidden;
	}
`;
// styles end

const CvContainer = () => (
  <Wrapper>
    <Header />
    <MainContent />
  </Wrapper>
);
export default CvContainer;
