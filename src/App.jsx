/* eslint-disable import/no-named-as-default-member */
import React, { useState } from 'react';
import LangButtons from './components/Buttons/LangButtons';
import CvContainer from './components/CvContainer/CvContainer';
import LangContext from './LangContext';
import plFlag from './assets/images/pl.png';
import gbFlag from './assets/images/gb.png';
import GlobalStyle from './theme/GlobalStyles';

const App = () => {
  const [lang, setLang] = useState('pl');

  const handleChangeLang = (language) => setLang(language);

  return (

    <LangContext.Provider value={lang}>
      <GlobalStyle />
      <LangButtons
        handleChangeLang={() => handleChangeLang('pl')}
        ariaLabel="kliknij by uzyskać polską wersję językową"
        imgSrc={plFlag}
        imgAlt="polska wersja językowa"
      />
      <LangButtons
        handleChangeLang={() => handleChangeLang('en')}
        ariaLabel="click for English version"
        imgSrc={gbFlag}
        imgAlt="english version"
      />
      <CvContainer lang={lang} />
    </LangContext.Provider>

  );
};

export default App;
