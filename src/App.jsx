/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React, { useState } from "react";
import styled from "styled-components";
import LangButtons from "./components/Buttons/LangButtons";
import DownloadButton from "./components/Buttons/DownloadButton";
import BcgImage from "./components/BackgroundImage/BcgImage";
import CvContainer from "./components/CvContainer/CvContainer";
import { LangProvider } from "./LangContext";
import plFlag from "./assets/images/pl.png";
import downloadImg from "./assets/images/download.svg";
import gbFlag from "./assets/images/gb.png";
import penBcg from "./assets/images/pen.png";
import plant from "./assets/images/plant.png";
import headphoneBcg from "./assets/images/headphone.png";
import keyboardBcg from "./assets/images/keyboard.png";
import GlobalStyle from "./theme/GlobalStyles";

// styles start
const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
// styles end

const App = () => {
  const [lang, setLang] = useState("pl");

  const handleChangeLang = (language) => setLang(language);

  return (
    <LangProvider value={lang}>
      <GlobalStyle />
      <ButtonsWrapper>
        <LangButtons
          handleChangeLang={() => handleChangeLang("pl")}
          ariaLabel='kliknij by uzyskać polską wersję językową'
          imgSrc={plFlag}
          imgAlt='polska wersja językowa'
        />
        <LangButtons
          handleChangeLang={() => handleChangeLang("en")}
          ariaLabel='click for English version'
          imgSrc={gbFlag}
          imgAlt='english version'
        />
        <DownloadButton
          imgSrc={downloadImg}
          href={`https://github.com/tomi5/tomasz-rysak-cv/raw/dev/Tomasz_Rysak-CV-${lang.toUpperCase()}.pdf`}
        />
      </ButtonsWrapper>

      <BcgImage imgSrc={penBcg} name='pen' />
      <BcgImage imgSrc={headphoneBcg} name='headphone' />
      <BcgImage imgSrc={keyboardBcg} name='keyboard' />
      <BcgImage imgSrc={plant} name='plant' />
      <CvContainer />
    </LangProvider>
  );
};

export default App;
