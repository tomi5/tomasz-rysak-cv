import React from 'react';
import LangContext from '../../LangContext'

const Projects = () => {
    return (
        <LangContext.Consumer>
            {(lang) => (
                <section>
                    <h1>Projects</h1>
                </section>
            )}

        </LangContext.Consumer>
    );
}

export default Projects;