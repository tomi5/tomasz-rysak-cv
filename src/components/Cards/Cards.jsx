import React from 'react';
import LangContext from '../../LangContext'

const Cards = () => {
    return (
        <LangContext.Consumer>
            {(lang) => (

                <p>To jest sekcja z kartami</p>

            )}
        </LangContext.Consumer>
    );
}

export default Cards;