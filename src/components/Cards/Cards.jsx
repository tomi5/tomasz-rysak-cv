import React, { Component } from 'react';
import LangContext from '../../LangContext'
import CardSection from './CardSection';
import highlightsData from './highlightsData';


class Cards extends Component {


    render() {

        const lang = this.context;

        const cardSection = highlightsData.map(highlight =>
            < CardSection
                key={highlight.id}
                highlight={highlightsData}
            />
        )


        return (
            <div>
                <h1>test</h1>
            </div>

        );
    }
}

Cards.contextType = LangContext;

export default Cards;