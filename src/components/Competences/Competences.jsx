import React from 'react';
import styled from 'styled-components';
import CompetenceSection from './CompetenceSection/CompetenceSection';


const Wrapper = styled.div`
  position: absolute;
	top: 19%;
	bottom: 0;
	left: 34%;
	right: 2%;
`;

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
    <Wrapper>
      {competences.map((competence, id) => (
        <CompetenceSection
          key={id}
          competence={competence}
        />
      ))}
    </Wrapper>
  );
};

export default Competences;
