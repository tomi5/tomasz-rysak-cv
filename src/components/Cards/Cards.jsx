import React, { Component } from 'react';
import LangContext from '../../LangContext'
import CardSection from './CardSection';
import highlightsData from './highlightsData';


class Cards extends Component {


    render() {

        const lang = this.context;

        const cardSection = highlightsData.map(highlight =>
            <CardSection
                key={highlight.id}
                highlight={highlightsData}
            />
        )

        // console.log('highlightsData:', highlightsData)

        return (
            <div>
                <CardSection
                />
                <CardSection
                />
                <CardSection
                />
                <CardSection
                />
            </div>

        );
    }
}

Cards.contextType = LangContext;

export default Cards;