import React, { useState } from 'react'
import LangButtons from '../Buttons/LangButtons'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'



const App = () => {

    const [lang, setLang] = useState('pl');

    const handleChangeLang = (language) => {
        setLang(language)
    }

    return (
        <>
            <LangButtons handleChangeLang={handleChangeLang} />
            <div>
                <Header lang={lang} />
                {/* <Main /> */}
                <Footer lang={lang} />
            </div>
        </>

    );
}

export default App;

