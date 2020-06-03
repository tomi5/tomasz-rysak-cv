import React from 'react';
import styled from 'styled-components';

// style start
const Button = styled.button`    
display: inline-block;
background-color: inherit;
width: 40px;
margin: 5px 20px;
border: none;
cursor: pointer;
outline: none;

&:focus {
  border: 1px solid #797979;
}
&:hover>img {
  transform: scale(1.1)
}
@media print {
  display: none;
}
`;

const Img = styled.img`
width: 100%;
height: auto;
object-fit: cover;
transition: transform .3s
`;
// style end

const LangButtons = ({ handleChangeLang, ...props }) => {
  const { ariaLabel, imgSrc, imgAlt } = props;

  return (
    <>
      <Button
        type="button"
        onClick={handleChangeLang}
        aria-label={ariaLabel}
      >
        <Img
          src={imgSrc}
          alt={imgAlt}
        />
      </Button>


    </>
  );
};


export default LangButtons;
