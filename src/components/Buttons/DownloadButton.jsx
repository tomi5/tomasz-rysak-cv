import React from 'react';
import styled from 'styled-components';

// styles start
const Img = styled.img`
width: auto;
height: 30px;
object-fit: cover;
transition: transform .3s
`;

const Button = styled.a`
  display: inline-block;
  margin: 30px 20px 5px;
  line-height: 16px;

  &:focus {
  border: 1px solid #797979;
  }
  
  &:hover ${Img} {
   transform: scale(1.1)
  }

  @media print {
  display: none;
}
`;
// styles end

const DownloadButtons = ({ href, imgSrc }) => (
  <Button href={href}>
    <Img
      src={imgSrc}
      alt="download"
    />
  </Button>
);

export default DownloadButtons;
