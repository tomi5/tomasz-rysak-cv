import React, { useContext } from "react";
import styled from "styled-components";
import LangContext from "../../LangContext";

// styles start
const Coulse = styled.p`
  padding: 7px;
  font-size: 6pt;
  text-align: left;
  font-style: italic;
  width: 90%;
`;
// styles end

const footerClouse = {
  pl: "Wyrażam zgodę na przetwarzanie moich danych osobowych do realizacji procesu obecnej i przyszłych rekrutacji na aplikowane przeze mnie stanowisko.",
  en: "I consent to the processing of my personal data for the purpose of the current and future recruitment processes for the position I have applied for.",
};

const Footer = () => {
  const lang = useContext(LangContext);

  return (
    <footer>
      <Coulse>{footerClouse[lang]}</Coulse>
    </footer>
  );
};

export default Footer;
