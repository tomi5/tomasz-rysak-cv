import React from 'react';
import styled from 'styled-components';
import CompetenceSection from './CompetenceSection/CompetenceSection';
import Footer from '../Footer/Footer';


const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
flex: 1;
`;

const Competences = () => {
  const competences = [

    {
      sectionName: 'works',
      sectionHeader: {
        pl: 'Wybrane doświadczenie zawodowe',
        en: 'Selected professional experience',
      },

    },
    {
      sectionName: 'projects',
      sectionHeader: {
        pl: 'Własne Projekty',
        en: 'Own Projects',
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
    <Main>
      <Wrapper>
      {competences.map((competence, id) => (
        <CompetenceSection
          key={id}
          competence={competence}
        />
      ))}
      </Wrapper>
      <Footer />
    </Main>


  );
};

export default Competences;
