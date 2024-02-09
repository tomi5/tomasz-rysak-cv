import React, { useContext } from 'react';
import styled from 'styled-components';
import headerSummaryData from '../../datas/HeaderSummaryData'
import LangContext from '../../LangContext';
import myPortait from '../../assets/images/portrait.jpg';
// styles start

const HeaderContainer = styled.header`
  padding: 20px 17px 10px 35px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;

const TextWrapper = styled.div`
 flex: 1;
 padding-right: 93px;  
`;

const Title = styled.h1`
  font-size: 43pt;
  color: #707070;
  font-weight: 700;
	text-transform: uppercase;
	text-align: left;  
  text-shadow: 1px 1px 3px #00000066;
    @supports (-webkit-text-stroke: 1px #000) {
      -webkit-text-stroke: 1px #000;
      -webkit-text-fill-color: white;  
    }
`;

const SubTitle = styled.h2`
  font-size: 18pt;
	text-align: left;
  font-weight: 400;
`;

const About = styled.p`
  padding-top: 5px;
	font-size: 8pt;
  line-height: 1.3em;
	font-style: italic;
	text-align: justify;
`;

const PhotoWrapper = styled.div`  
  flex: 0 0 180px;  
  height: 180px;
  border-radius: 11px;
	box-shadow: 5px 8px 9px #1A181859;	
  overflow: hidden;
 

  .myPortait {
    display: block;
	  width: 100%;    
	  height: auto;
    transform: translateZ(0); // prevent downscale the image in Chrome
  }
`;

// styles end

const headerPhotoDescr = {
  pl: 'zdjęcie portretowe',
  en: 'portrait photo',
};

const Header = () => {
  const lang = useContext(LangContext);

  return (
    <HeaderContainer>
      <TextWrapper>
        <Title>Tomasz Rysak</Title>
        <SubTitle>{'< front-end developer />'}</SubTitle>
        <About>{headerSummaryData[lang]}</About>
      </TextWrapper>
      <PhotoWrapper>
        <img
          className="myPortait"
          src={myPortait}
          alt={headerPhotoDescr[lang]}
        />
      </PhotoWrapper>
    </HeaderContainer>
  );
};

export default Header;
