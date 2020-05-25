import React, { useContext } from 'react';
import LangContext from '../../../../LangContext';


const EducationItem = ({ education }) => {
  const lang = useContext(LangContext);

  const {
    date, school, spec, degree,
  } = education[lang];
  return (
    <div>
      <p>{date}</p>
      <h4>{school}</h4>
      <p>{spec}</p>
      <p>{degree}</p>
    </div>
  );
};

export default EducationItem;
