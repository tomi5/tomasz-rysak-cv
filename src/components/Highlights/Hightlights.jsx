import React from 'react';
import styled from 'styled-components';
import HighlightsSection from './HighlightsSection/HightlightsSection';
import highlightsData from '../../datas/highlightsData';

// styles start
const Wrapper = styled.aside`
	position: relative; 
  margin-top: 10px;
  padding-top: 20px;
  flex: 0 0 30%;
  display: flex;  
  flex-direction: column;  
  justify-content: space-between;
  background: transparent linear-gradient(0deg, #8CC6E866 0%, #69BEEF42 48%, #FFFFFFA1 100%) 0% 0% no-repeat;
  
    &::before {
      position: absolute;
      content: "";
      top: 0;
      bottom: 0;
      right: 0;
      width: 1px;
      background: #55B9F39C;
      box-shadow: 2px 3px 3px #8597A175;
    }
`;
// styles end

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
