import React from 'react';
import styled from 'styled-components';
import Highlights from '../Highlights/Hightlights';
import Competences from '../Competences/Competences';


// styles start
const Wrapper = styled.div`
    flex: 1 0;
    display: flex;
    flex-direction: row;      
`;
// styles end

const MainContent = () => (
  <Wrapper>
    <Highlights />
    <Competences />
  </Wrapper>
);
export default MainContent;
