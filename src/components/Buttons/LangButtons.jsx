import React from 'react'
import plFlag from '../../assets/images/pl.png';
import gbFlag from '../../assets/images/gb.png';


const LangButtons = (props) => (
    
    <>
        <button
            onClick={props.handleChangeLang.bind(this, "pl")}
            aria-label="kliknij by uzyskać polską wersję językową">
            <img
                src={plFlag}
                alt="polska wersja językowa"></img>
        </button>
        <button
            onClick={props.handleChangeLang.bind(this, "en")}
            aria-label="click for English version">
            <img
                src={gbFlag}
                alt="english version"></img>
        </button>
    </>
);


export default LangButtons;

