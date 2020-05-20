import React from 'react';

import CompetenceSection from './CompetenceSection';

const Competences = () => {

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
    ];
    const competencesSection = competences.map((competence, id) =>
        <CompetenceSection
            key={id}
            competence={competence}
        />
    )

    return <div>{competencesSection}</div>;
}

export default Competences;
