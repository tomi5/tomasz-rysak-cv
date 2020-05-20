import React, { Component } from 'react';
import LangContext from '../../../LangContext'


class EducationItem extends Component {

    render() {

        const lang = this.context;
        const educationObj = this.props.education;
        const { date, school, spec, degree } = educationObj[lang];

        return (
            <div>
                <p>{date}</p>
                <h4>{school}</h4>
                <p>{spec}</p>
                <p>{degree}</p>
            </div>
        );
    }
}

EducationItem.contextType = LangContext;


export default EducationItem;

