import React, { useContext } from 'react';
import styled from 'styled-components';
import LangContext from '../../LangContext';
import Header from './Header';
import Footer from './Footer';
import Competences from '../Competences/Competences';
import myPortait from '../../assets/images/portrait.jpg';

// styles start
const Wrapper = styled.div`
flex: 1 0;
`;
// styles end

const MainContent = () => {
  const headerAbout = {
    pl: 'Jestem front-end developerem samoukiem. Choć moje doświadczenie zawodowe oraz wykształcenie nie są związane z branżą IT, to jednak przy każdej wykonywanej pracy starałem się ją przede wszystkim zautomatyzować i usprawnić. Małe programy stworzone przeze mnie dla potrzeb firmy, takie jak: proste skrypty do archiwizacji danych, bazy danych i szablony kalkulacji imprez turystycznych przynosiły wymierne korzyści dla całego zespołu. Podczas wyszukiwania rozwiązań do tworzonych aplikacji i rozmów ze znajomymi programistami powoli wciągałem się w świat web developmentu i zacząłem tworzyć swoje pierwsze hobby-projekty.',
    en: "I am a self-taught front-end developer. Although my professional experience and education are not related to the IT, at every job I tried to automate and improve my works. Small apps created by me for the company's needs, such as simple backup scripts, databases and templates for calculating tourist offer were of benefit to the whole team. While searching for solutions for creating these apps and conversations with friends programmers, I involved in the world of web development and I started to create my first hobby projects.",
  };
  const headerPhotoDescr = {
    pl: 'zdjęcie portretowe',
    en: 'portrait photo',
  };

  const footerClouse = {
    pl: 'Wyrażam zgodę na przetwarzanie moich danych osobowych do realizacji procesu obecnej i przyszłych rekrutacji zgodnie z art. 6 ust. 1 lit. a Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych).',
    en: 'I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).',
  };

  const lang = useContext(LangContext);


  return (
    <Wrapper>
      <Header
        headerAbout={headerAbout[lang]}
        headerPhotoSrc={myPortait}
        headerPhotoDescr={headerPhotoDescr[lang]}
      />
      <Competences />
      <Footer footerClouse={footerClouse[lang]} />
    </Wrapper>
  );
};
export default MainContent;
