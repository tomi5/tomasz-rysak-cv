import React, { useContext } from 'react';
import LangContext from '../../../../LangContext';
import ProjectButtons from '../../../Buttons/ProjectButtons';

const ProjectItems = ({ project }) => {
  const lang = useContext(LangContext);
  const { techs, GitHub, Live } = project;

  const { name, descr } = project[lang];
  const TXT = {
    pl: 'Użyte technologie: ',
    en: 'Used: ',
  };
  return (
    <div>
      <h4>{name}</h4>
      <p>{descr}</p>
      <p>
        {TXT[lang]}
        <span>{techs}</span>
      </p>
      <ProjectButtons
        GitHub={GitHub}
        Live={Live}
      />
    </div>
  );
};

export default ProjectItems;
