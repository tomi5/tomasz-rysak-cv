import React from 'react';

const ProjectButtons = (props) => {
  const linksArr = Object.entries(props);

  const links = linksArr.map((link, id) => {
    const name = link[0];
    const href = link[1];

    return (
      <a
        href={href}
        key={id}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </a>
    );
  });

  return <div>{links}</div>;
};

export default ProjectButtons;
