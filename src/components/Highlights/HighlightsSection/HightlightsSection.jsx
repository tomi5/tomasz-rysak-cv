/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React, { useContext } from 'react';
import styled from 'styled-components';
import LangContext from '../../../LangContext';
import HighlightItems from './HighlightsItem/HighlightItems';

// styles start
const Section = styled.section`  
  position: relative;
  padding: 10px 7px 25px;
	width: 100%;
	color: #fff;  
  background: ${({ sectionName }) => (
    (sectionName === 'contact' && '#3481AB')
    || (sectionName === 'skills' && '#14597F')
    || (sectionName === 'languages' && '#4098C9')
    || (sectionName === 'hobby' && '#3481AB')
  )
};
  &::before {
    content: "";
    width: 145px;
    height: 20px;
    position: absolute;
    top: -15px;
    left: 40px;
    border-radius: 6px;
    z-index: 1;       
    background: inherit;
  }
`;

const CardTitle = styled.h3`
    position: absolute;
    left: 0;
    right: 0;
    top: -12px;
    font-size: 10pt;
    font-weight: bold;
    text-transform: uppercase;
    z-index: 2;
`;
// styles end

const HighlightsSection = ({ section }) => {
  const { sectionName, sectionHeader, sectionItem } = section;

  const lang = useContext(LangContext);

  return (
    <Section sectionName={sectionName}>
      <CardTitle>{sectionHeader[lang]}</CardTitle>
      <ul>
        <HighlightItems
          sectionName={sectionName}
          sectionItem={sectionItem}
          lang={lang}
        />
      </ul>
    </Section>

  );
};

export default HighlightsSection;
