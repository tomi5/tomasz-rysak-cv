import React, { Component } from 'react';
import LangContext from '../../../LangContext'




class WorkItem extends Component {

    render() {

        const props = this.props;
        const lang = this.context;


        return (
            <div>
                <p>Data</p>
                <h4>Firma
                    <span> - Pozycja</span>
                </h4>
                <ul>
                    Obowiązki lista
                </ul>
            </div>
        );
    }
}

WorkItem.contextType = LangContext;


export default WorkItem;

