import React from 'react';
import styled from 'styled-components';
import HighlightsSection from './HighlightsSection/HightlightsSection';
import highlightsData from '../../datas/highlightsData';


const Wrapper = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	width: 225px;
	background-color: #77B9DD;
	box-shadow: 2px 0px 9px #0000003b;
`;

const Highlights = () => (
  <Wrapper>
    {highlightsData.map((section, id) => (
      <HighlightsSection
        key={id}
        section={section}
      />
    ))}
  </Wrapper>
);

export default Highlights;
