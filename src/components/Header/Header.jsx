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
 padding-right: 74px; 
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
  line-height: 1.4em;
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
  pl: 'Jestem front-end developerem samoukiem. Choć moje wykształcenie nie jest związane z branżą IT, to jednak przy każdej wykonywanej pracy starałem się ją przede wszystkim zautomatyzować i usprawnić. Swoje pierwsze doświadczenie na stanowisku Front-end developer zdobyłem w agencji interaktywnej Webiso,  w której poznawałem swiat developmentu od kuchni i z powodzeniem realizowałem projekty. Jako freelancer stowrzyłem również swoje pierwsze komercyjne projekty. Chętnie poznaję nowe użyteczne (na topie) technologie. Jestem otwarty na wspolrace zarówno B2B/UoP',
  en: 'I am a self-taught front-end developer. Although my education is not related to the IT, at every job I tried to automate and improve my works. Small apps created by me for the company\'s needs, such as simple backup scripts, databases and templates for calculating tourist offer were of benefit to the whole team. While searching for solutions for creating these apps and conversations with friends programmers, I involved in the world of web development and I started to create my first hobby projects.',
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
