import React, { useState } from 'react';
import LangButtons from './components/Buttons/LangButtons';
import CvContainer from './components/CvContainer/CvContainer';
import LangContext from './LangContext';


const App = () => {
  const [lang, setLang] = useState('pl');

  const handleChangeLang = (language) => setLang(language);

  return (
    <>
      <LangContext.Provider value={lang}>
        <LangButtons handleChangeLang={handleChangeLang} />
        <CvContainer lang={lang} />
      </LangContext.Provider>
    </>

  );
};

export default App;
