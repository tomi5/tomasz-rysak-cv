/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import styled from 'styled-components';
import LangContext from '../../../LangContext';
import HighlightItems from './HighlightsItem/HighlightItems';

const Section = styled.section`
  position: 'relative';
	left: 0;
	width: 100%;
	color: #fff;
`;

const HighlightsSection = ({ section }) => {
  const { sectionName, sectionHeader, sectionItem } = section;

  return (
    <LangContext.Consumer>
      {(lang) => (
        <Section>
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
      )}
    </LangContext.Consumer>
  );
};

export default HighlightsSection;
