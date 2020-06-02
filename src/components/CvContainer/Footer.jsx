import React from 'react';
import styled from 'styled-components';

const Coulse = styled.p`
    padding: 7px;
    font-size: 7.5pt;
    text-align: justify;
    font-style: italic;
`;

const Footer = ({ footerClouse }) => (
  <footer>
    <Coulse>{footerClouse}</Coulse>
  </footer>
);

export default Footer;
