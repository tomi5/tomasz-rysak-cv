import React, { Component } from 'react';

import CompetencesSection from './CompetencesSection';


class Competences extends Component {

    render() {

        const competences = [
            {
                sectionName: 'projects',
                sectionHeader: {
                    pl: "Własne Projekty",
                    en: "Own Projects",
                }
            },
            {
                sectionName: 'works',
                sectionHeader: {
                    pl: "Wybrane doświadczenie zawodowe",
                    en: "Selected professional experience",
                }
            },
            {
                sectionName: 'education',
                sectionHeader: {
                    pl: "Wykształcenie",
                    en: "Education",
                }
            },
        ]

        const competencesSection = competences.map((competence, id) =>
            <CompetencesSection
                key={id}
                competence={competence}
            />
        )

        return (
            <div>
                {competencesSection}
            </div>
        );
    }
}

export default Competences;

