import React from 'react'


const ProjectButtons = ({ liveLink, gitLink }) => {


    return (
        <div>
            <a
                href={gitLink}

                rel="noopener noreferrer"
            >GitHub</a>
            <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
            >Live</a>
        </div>
    );
}

export default ProjectButtons;

