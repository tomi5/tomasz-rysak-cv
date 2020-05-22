import React, { useState } from 'react'
import LangButtons from './components/Buttons/LangButtons'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import LangContext from './LangContext'


const App = () => {

    const [lang, setLang] = useState('pl');

    const handleChangeLang = language => setLang(language);

    return (
        <>
            <LangContext.Provider value={lang}>
                <LangButtons handleChangeLang={handleChangeLang} />
                <div>
                    <Header lang={lang} />
                    <Main />
                    <Footer lang={lang} />
                </div>
            </LangContext.Provider>
        </>

    );
}

export default App;

