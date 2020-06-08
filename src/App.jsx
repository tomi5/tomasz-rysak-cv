/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React, { useState } from 'react';
import LangButtons from './components/Buttons/LangButtons';
import BcgImage from './components/BackgroundImage/BcgImage';
import CvContainer from './components/CvContainer/CvContainer';
import { LangProvider } from './LangContext';
import plFlag from './assets/images/pl.png';
import gbFlag from './assets/images/gb.png';
import penBcg from './assets/images/pen.png';
import plant from './assets/images/plant.png';
import headphoneBcg from './assets/images/headphone.png';
import keyboardBcg from './assets/images/keyboard.png';
import GlobalStyle from './theme/GlobalStyles';

const App = () => {
  const [lang, setLang] = useState('pl');

  const handleChangeLang = (language) => setLang(language);

  return (

    <LangProvider value={lang}>
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
      <BcgImage
        imgSrc={penBcg}
        name="pen"
      />
      <BcgImage
        imgSrc={headphoneBcg}
        name="headphone"
      />
      <BcgImage
        imgSrc={keyboardBcg}
        name="keyboard"
      />
      <BcgImage
        imgSrc={plant}
        name="plant"
      />
      <CvContainer />
    </LangProvider>

  );
};

export default App;
