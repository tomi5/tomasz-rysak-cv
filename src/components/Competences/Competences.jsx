import React from 'react';

import CompetenceSection from './CompetenceSection/CompetenceSection';

const Competences = () => {
  const competences = [
    {
      sectionName: 'projects',
      sectionHeader: {
        pl: 'Własne Projekty',
        en: 'Own Projects',
      },

    },
    {
      sectionName: 'works',
      sectionHeader: {
        pl: 'Wybrane doświadczenie zawodowe',
        en: 'Selected professional experience',
      },

    },
    {
      sectionName: 'education',
      sectionHeader: {
        pl: 'Wykształcenie',
        en: 'Education',
      },

    },
  ];


  return (
    <main>
      {competences.map((competence, id) => (
        <CompetenceSection
          key={id}
          competence={competence}
        />
      ))}
    </main>
  );
};

export default Competences;
