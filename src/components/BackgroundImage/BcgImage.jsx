/* eslint-disable linebreak-style */
import React from 'react';
import styled, { css } from 'styled-components';

// style start


/**  separate styles for images and its wrapper  * */
const PenImgWrapper = css`
    width: 419px;
    top: 50%;
    left: calc(50% + 8cm);
    transform: translateY(-50%);

    img {
      transform: rotate(67deg);
      filter: drop-shadow(10px -1px 7px #999999);
    }
`;
const HeadphoneImgWrapper = css`
    width: 513px;
    top: 47%;
    left: calc(7% - 8cm); 

    img {
      transform: rotate(-65deg);
    }
`;
const PlantImgWrapper = css`
    width: 500px;
    top: 0;
    left: 0; 
    transform: translate(-25%, -25%);
    img {
      filter: drop-shadow(10px -1px 7px #999999);
    }
   
`;
const KeyboardImgWrapper = css`
    display: none;
    width: 1200px;
    top: 4%;
    right: 0;
    transform: translateX(50%);

    img {
      transform: rotate(44deg);
      filter: drop-shadow(10px -1px 7px #999999);
    }

    @media only screen and (min-width: 1400px) {
      top: 13%;
    }
    
`;

/**  general styles * */

const BcgWrapper = styled.div`
    position: absolute;
    display: none;
    height: auto;   
    
    /**  displaying styles depending on the props passed  **/
    ${({ name }) => (
    (name === 'pen' && PenImgWrapper)
      || (name === 'headphone' && HeadphoneImgWrapper)
      || (name === 'keyboard' && KeyboardImgWrapper)
      || (name === 'plant' && PlantImgWrapper)
  )};

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  
    @media only screen and (min-width: ${({ name }) => (name === 'keyboard'
    ? '1200px'
    : '1100px')})
      {
        display: block;
      }
`;

const BcgImage = ({ imgSrc, name }) => (
  <BcgWrapper name={name}>
    <img
      src={imgSrc}
      alt={name}
      name={name}
    />
  </BcgWrapper>
);

export default BcgImage;
