import React, { Component } from 'react';
import LangContext from '../../LangContext'




class CardSections extends Component {

    render() {

        const { sectionName, sectionHeader, sectionItem } = this.props.card



        if (sectionName === 'contact') {
            const contactValuesArr = Object.values(sectionItem);
            contactValuesArr.map((value, id) =>
                console.log(value))


        }


        return (
            <LangContext.Consumer>
                {(lang) => (
                    <section>
                        <h3>{sectionHeader[lang]}</h3>
                        <div>
                            <ul>
                                {
                                    sectionItem[lang] ? (
                                        sectionItem[lang].map((item, id) =>
                                            <li key={id}>{item}</li>
                                        ) // set li items for hobby and language section
                                    ) : (

                                            Object.values(sectionItem).map((value, id) =>
                                                <li key={id}>{value}</li>
                                            )

                                        )
                                }
                            </ul>
                        </div>
                    </section>
                )}

            </LangContext.Consumer >
        );
    }
}





export default CardSections;
