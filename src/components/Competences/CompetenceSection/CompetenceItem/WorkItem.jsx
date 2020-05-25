import React, { useContext } from 'react';
import LangContext from '../../../../LangContext';
import WorkDuties from './WorkDuties/WorkDuties';


const WorkItem = ({ work }) => {
  const lang = useContext(LangContext);
  const {
    date, company, position, duties,
  } = work[lang];

  return (
    <div>
      <p>{date}</p>
      <h4>
        {company}
        <span>
          {' '}
          -
          {position}
        </span>
      </h4>
      <ul>
        {duties.map((duty, id) => (
          <WorkDuties
            key={id}
            duty={duty}
          />
        ))}
      </ul>
    </div>
  );
};

export default WorkItem;
