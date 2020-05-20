import React, { Component } from 'react';
import CardsSection from './CardsSection';
import highlightsData from './highlightsData'





const Cards = () => {


    const cardsSection = highlightsData.map((card, id) =>
        <CardsSection
            key={id}
            card={card}
        />
    )

    return <div>{cardsSection}</div>;
}

export default Cards;
