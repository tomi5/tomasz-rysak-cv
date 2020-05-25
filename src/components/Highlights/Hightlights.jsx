import React from 'react';
import HighlightsSection from './HighlightsSection/HightlightsSection';
import highlightsData from '../../datas/highlightsData';


const Highlights = () => (
  <div>
    {highlightsData.map((section, id) => (
      <HighlightsSection
        key={id}
        section={section}
      />
    ))}
  </div>
);

export default Highlights;
