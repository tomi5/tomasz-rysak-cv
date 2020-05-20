import React from 'react';
import competencesSectionData from './competencesSectionData'
import CompetenceSection from './CompetenceSection';

const Competences = () => {

    const competencesSection = competencesSectionData.map((competence, id) => {

        const { sectionType, sectionName, sectionHeader } = competence;
        return <CompetenceSection
            key={id}
            sectionType={sectionType}
            sectionName={sectionName}
            sectionHeader={sectionHeader}
        />
    })

    console.log('competencesSection:', competencesSection)

    return <div className="main">{competencesSection}</div>;
}

export default Competences;
