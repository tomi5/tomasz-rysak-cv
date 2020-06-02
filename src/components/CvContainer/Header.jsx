import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
padding: 20px 12px 10px 35px
`;

const Title = styled.h1`
  font-size: 28pt;
	text-transform: uppercase;
	text-align: left;
`;

const SubTitle = styled.h2`
  font-size: 14pt;
	text-align: left;
`;

const About = styled.p`
  padding-top: 15px;
	font-size: 9pt;
	font-style: italic;
	text-align: justify;
`;

const PhotoWrapper = styled.div`
  position: absolute;
	top: 15px;
	left: 65px;
	width: 180px;
	height: 180px;
	background-color: #E9E3E3;
	box-shadow: 2px 3px 4px #0000003b;
	z-index: 2;
`;

const Photo = styled.img`
  display: block;
	width: 100%;
	height: auto;
`;

const Header = (props) => {
  const { headerAbout, headerPhotoSrc, headerPhotoDescr } = props;

  return (
    <HeaderContainer>
      <Title>Tomasz Rysak</Title>
      <SubTitle>{'</ front-end developer />'}</SubTitle>
      <About>{headerAbout}</About>

      <PhotoWrapper>
        <Photo
          src={headerPhotoSrc}
          alt={headerPhotoDescr}
        />
      </PhotoWrapper>
    </HeaderContainer>
  );
};

export default Header;
