import React, { Component } from 'react';
import LangContext from '../../../LangContext'
import ProjectButtons from '../../Buttons/ProjectButtons'


class ProjectItems extends Component {

    render() {

        const { techs, GitLink, LiveLink } = this.props.project;
        const projectObj = this.props.project
        const lang = this.context;
        const { name, descr } = projectObj[lang];

        const TXT = {
            pl: "Użyte technologie: ",
            en: "Used: ",
        };


        return (
            <div>
                <h4>{name}</h4>
                <p>{descr}</p>
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

