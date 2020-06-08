/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React, { useContext } from 'react';
import styled from 'styled-components';
import LangContext from '../../../LangContext';
import HighlightItems from './HighlightsItem/HighlightItems';

// styles start
const Section = styled.section`   
  padding: 10px 3px 10px 7px;
	width: 100%;  
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;
const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;     
`;

const CardTitle = styled.h3`
    padding-left: 8px;
    color: #55B9F3;
    font-size: 10pt;
    font-weight: 700;
    text-transform: uppercase;
    writing-mode: vertical-rl;
    transform: rotate(180deg)
   
`;
// styles end

const HighlightsSection = ({ section }) => {
  const { sectionName, sectionHeader, sectionItem } = section;

  const lang = useContext(LangContext);

  return (
    <Section>
      <CardTitle>{sectionHeader[lang]}</CardTitle>
      <List>
        <HighlightItems
          sectionName={sectionName}
          sectionItem={sectionItem}
          lang={lang}
        />
      </List>
    </Section>

  );
};

export default HighlightsSection;
