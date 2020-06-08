import React, { useContext } from 'react';
import styled from 'styled-components';
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

  img {
    display: block;
	  width: 100%;
	  height: auto;
  }
`;

// styles end

const headerAbout = {
  pl: 'Jestem front-end developerem samoukiem. Pierwsze doświadczenie na tym stanowisku zdobyłem w agencji interaktywnej Webiso, gdzie z powodzeniem realizowałem powierzone mi projekty. Dzięki współpracy z bardziej doświadczonymi developerami, mogłem udoskonalić swoje umiejętności oraz poszerzyć wiedzę o kolejne technologie. Jako freelancer stworzyłem swoje pierwsze komercyjne projekty. Największą statysfakcję w pracy czerpię kiedy stawiam czoła wyzwaniom, przy którch mam okazję rozwijać się i uczyć nowych rzeczy. Doświadczenie i umięjętnośći miękkie nabyte w pracy w innych branżach z pewnością wnoszą wiele pozytywnych aspektów do zespołu do którego dołączam. Jestem otwarty na podjęcie współpracy na B2B lub UoP.',
  en: 'I am a self-taught front-end developer. I gained my first experience in this position at the Webiso interactive agency, where I successfully implemented the projects I in charge of. Working with more experienced developers, I was able to improve my skills and expand my knowledge with new technologies. As a freelancer, I created my first commercial projects. I gain the most satisfaction at work when I am challenged, have the opportunity to develop myself and learn new things. My Experience and soft skills acquired at jobs beyond IT branch certainly bring many positive aspects to the team I join. I am open to cooperation on B2B contract or employment contract.',
};
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
        <About>{headerAbout[lang]}</About>
      </TextWrapper>
      <PhotoWrapper>
        <img
          src={myPortait}
          alt={headerPhotoDescr[lang]}
        />
      </PhotoWrapper>
    </HeaderContainer>
  );
};

export default Header;
