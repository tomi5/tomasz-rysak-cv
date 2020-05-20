import React, { Component } from 'react';
import LangContext from '../../../LangContext'
import WorkDuties from './WorkDuties'


class WorkItem extends Component {

    render() {
        const workObj = this.props.work;
        const lang = this.context;
        const { date, company, position, duties } = workObj[lang];

        return (
            <div>
                <p>{date}</p>
                <h4>{company}
                    <span> - {position}</span>
                </h4>
                <ul>
                    {duties.map((duty, id) =>
                        <WorkDuties
                            key={id}
                            duty={duty}
                        />
                    )}
                </ul>
            </div >
        );
    }
}

WorkItem.contextType = LangContext;


export default WorkItem;

