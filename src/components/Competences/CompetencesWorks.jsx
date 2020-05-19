import React from 'react';
import LangContext from '../../LangContext'
import WorksData from './WorksItem/WorksData';
import WorkItem from './WorksItem/WorkItem';



const Works = () => {

    const HEADER = {
        pl: "Wybrane doświadczenie zawodowe",
        en: "Selected professional experience",
    }

    const workItem = WorksData.map(work =>
        <WorkItem
            key={work.id}
            project={work}
        />
    )


    return (
        <LangContext.Consumer>
            {(lang) => (
                <section>
                    <span className="competence__icon fas fa-user-tie" aria-hidden="true"></span>
                    <h3>{HEADER[lang]}</h3>
                    {workItem}
                </section>
            )}

        </LangContext.Consumer>
    );
}

export default Works;