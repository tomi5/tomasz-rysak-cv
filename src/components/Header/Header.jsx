import React from 'react';
import myPortait from '../../assets/images/portrait.jpg';



const Header = ({ lang }) => {

    const ABOUT_TEXT = {
        pl: "Jestem front-end developerem samoukiem. Choć moje doświadczenie zawodowe oraz wykształcenie nie są związane z branżą IT, to jednak przy każdej wykonywanej pracy starałem się ją przede wszystkim zautomatyzować i usprawnić. Małe programy stworzone przeze mnie dla potrzeb firmy, takie jak: proste skrypty do archiwizacji danych, bazy danych i szablony kalkulacji imprez turystycznych przynosiły wymierne korzyści dla całego zespołu. Podczas wyszukiwania rozwiązań do tworzonych aplikacji i rozmów ze znajomymi programistami powoli wciągałem się w świat web developmentu i zacząłem tworzyć swoje pierwsze hobby-projekty.",
        en: "I am a self-taught front-end developer. Although my professional experience and education are not related to the IT, at every job I tried to automate and improve my works. Small apps created by me for the company's needs, such as simple backup scripts, databases and templates for calculating tourist offer were of benefit to the whole team. While searching for solutions for creating these apps and conversations with friends programmers, I involved in the world of web development and I started to create my first hobby projects."
    };

    const PHOTO_DESCR = {
        pl: "zdjęcie portretowe",
        en: "portrait photo"
    };


    return (
        <header>
            <h1>Tomasz Rysak</h1>
            <h2>&lt; front-end developer &#47;&gt;</h2>
            <p>{ABOUT_TEXT[lang]}</p>

            <div className="picture-container">
                <img
                    src={myPortait}
                    alt={PHOTO_DESCR[lang]}
                />
            </div>
        </header>
    );

}

export default Header;