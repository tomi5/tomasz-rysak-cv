/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import LangContext from '../../../LangContext';
import HighlightItems from './HighlightsItem/HighlightItems';

const HighlightsSection = ({ section }) => {
  const { sectionName, sectionHeader, sectionItem } = section;

  return (
    <LangContext.Consumer>
      {(lang) => (
        <section>
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
        </section>
      )}
    </LangContext.Consumer>
  );
};

export default HighlightsSection;
