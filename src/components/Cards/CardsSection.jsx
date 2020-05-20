import React, { Component } from 'react';
import LangContext from '../../LangContext'
import Item from './Item'



class CardSections extends Component {

    render() {
        const lang = this.context;

        const { sectionName, sectionHeader, sectionItem } = this.props.card

        // const item = sectionItem.map((item, id) =>
        //     <Item
        //         key={id}
        //         item={item}
        //     />
        // )


        return (
            <LangContext.Consumer>
                {(lang) => (
                    <section>
                        <h3>{sectionHeader[lang]}</h3>
                        <div>
                            <ul>
                                item
                            </ul>
                        </div>
                    </section>
                )}

            </LangContext.Consumer >
        );
    }
}
CardSections.contextType = LangContext;




export default CardSections;
