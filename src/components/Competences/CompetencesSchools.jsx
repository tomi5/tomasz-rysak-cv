import React from 'react';
import LangContext from '../../LangContext'

const Schools = () => {
    return (
        <LangContext.Consumer>
            {(lang) => (
                <section>
                    <h1>Schools</h1>
                </section>
            )}

        </LangContext.Consumer>

    );
}

export default Schools;