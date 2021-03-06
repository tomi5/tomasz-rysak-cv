import React, { useContext } from 'react';
import styled from 'styled-components';
import LangContext from '../../LangContext';

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
  pl: 'Wyrażam zgodę na przetwarzanie moich danych osobowych do realizacji procesu obecnej i przyszłych rekrutacji zgodnie z art. 6 ust. 1 lit. a Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych).',
  en: 'I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).',
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
