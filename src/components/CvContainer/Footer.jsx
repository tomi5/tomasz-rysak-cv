import React from 'react';
import styled from 'styled-components';

// styles start
const Coulse = styled.p`
    padding: 7px;
    font-size: 7.5pt;
    text-align: justify;
    font-style: italic;
`;
// styles end

const Footer = ({ footerClouse }) => (
  <footer>
    <Coulse>{footerClouse}</Coulse>
  </footer>
);

export default Footer;
