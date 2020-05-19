import React, { Component } from 'react';
import LangContext from '../../../LangContext'
import ProjectButtons from '../../Buttons/ProjectButtons'


class ProjectItems extends Component {

    render() {

        const props = this.props;
        const lang = this.context;
        const { pl, en, techs, GitLink, LiveLink } = props.project

        const TXT = {
            pl: "Użyte technologie: ",
            en: "Used: ",
        };


        return (
            <div>
                <h4>{lang === "pl" ? pl.name : en.name}</h4>
                <p>{lang === "pl" ? pl.descr : en.descr}</p>
                <p>{TXT[lang]}<span>{techs}</span></p>
                <ProjectButtons
                    liveLink={LiveLink}
                    gitLink={GitLink}
                />
            </div>);
    }
}

ProjectItems.contextType = LangContext;


export default ProjectItems;

