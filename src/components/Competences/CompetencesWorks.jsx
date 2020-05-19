import React from 'react';
import LangContext from '../../LangContext'


const Works = () => {
    return (
        <LangContext.Consumer>
            {(lang) => (
                <section>
                    <h1>Works</h1>
                </section>
            )}

        </LangContext.Consumer>
    );
}

export default Works;