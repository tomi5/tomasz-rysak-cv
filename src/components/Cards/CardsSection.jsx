import React, { Component } from 'react';
import LangContext from '../../LangContext'
import ContactItem from './ContactItem'




class CardSections extends Component {


    getSectionItem = (item, sectionName, lang) => {


        switch (sectionName) {
            case "contact":
                return item.map((item, id) =>
                    <ContactItem
                        key={id}
                        item={item}
                    >lorem</ContactItem>
                );
            case "skills":
                return <li>test</li>
            case "languages":
            case "hobby":
                return item[lang].map((item, id) =>
                    <li key={id}>{item}</li>
                );

            default:
                return
        }
    };



    render() {
        const lang = this.context;
        const { sectionName, sectionHeader, sectionItem } = this.props.card;

        return (
            <section>
                <h3>{sectionHeader[lang]}</h3>
                <div>
                    <ul>
                        {this.getSectionItem(sectionItem, sectionName, lang)}
                    </ul>
                </div>
            </section>
        );
    }
}

CardSections.contextType = LangContext;




export default CardSections;
