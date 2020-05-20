import React from 'react';
import CardsSection from './CardsSection';
import highlightsData from './highlightsData'





const Cards = () => {




    return <div>{highlightsData.map((card, id) =>
        <CardsSection
            key={id}
            card={card}
        />
    )}</div>;
}

export default Cards;
