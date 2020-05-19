import React from 'react';
import LangContext from '../../LangContext'

const Cards = () => {
    return (
        <LangContext.Consumer>
            {(lang) => (

                <p>{lang}</p>

            )}
        </LangContext.Consumer>
    );
}

export default Cards;