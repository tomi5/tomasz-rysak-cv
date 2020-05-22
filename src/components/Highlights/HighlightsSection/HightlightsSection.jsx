import React from 'react';
import LangContext from '../../../LangContext';
import HighlightItems from './HighlightsItem/HighlightItems';

const HighlightsSection = (props) => {
  const { sectionName, sectionHeader, sectionItem } = props.card;

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
