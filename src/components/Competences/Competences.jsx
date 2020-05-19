import React from 'react';
import Projects from './CompetencesProjects';
import Works from './CompetencesWorks';
import Education from './CompetencesSchools';
// import LangContext from '../../LangContext'

const Competences = () => {
    return (
        <div>
            <Projects />
            <Works />
            <Education />
        </div>

    );
}

export default Competences;