import React from 'react';
import LangContext from '../../LangContext'
import CardItems from './CardItems'

const CardSections = (props) => {
    const { sectionName, sectionHeader, sectionItem } = props.card;

    return (
        <LangContext.Consumer>
            {(lang) => (
                <section>
                    <h3>{sectionHeader[lang]}</h3>
                    <div>
                        <ul>
                            <CardItems
                                sectionName={sectionName}
                                sectionItem={sectionItem}
                            />
                        </ul>
                    </div>
                </section>
            )}
        </LangContext.Consumer>
    );
}

export default CardSections;
