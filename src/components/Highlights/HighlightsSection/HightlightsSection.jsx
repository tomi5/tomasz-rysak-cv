/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React, { useContext } from 'react';
import styled from 'styled-components';
import LangContext from '../../../LangContext';
import HighlightItems from './HighlightsItem/HighlightItems';


const Section = styled.section`  
  position: relative;
	width: 100%;
	color: #fff;  
  background: ${({ sectionName }) => (
    sectionName === 'contact' && '#3481AB'
    || sectionName === 'skills' && '#14597F'
    || sectionName === 'languages' && '#4098C9'
    || sectionName === 'hobby' && '#3481AB'
  )
};
padding: 20px;
  &::before {
    content: "";
    width: 145px;
    height: 30px;
    position: absolute;
    top: -15px;
    left: 40px;
    border-radius: 6px;
    z-index: 1;       
    background: inherit;
  }
`;

const HighlightsSection = ({ section }) => {
  const { sectionName, sectionHeader, sectionItem } = section;

  const lang = useContext(LangContext);

  return (
    <Section sectionName={sectionName}>
      <h3>{sectionHeader[lang]}</h3>
      <div>
        <ul>
          <HighlightItems
            sectionName={sectionName}
            sectionItem={sectionItem}
            lang={lang}
          />
        </ul>
      </div>
    </Section>

  );
};

export default HighlightsSection;
