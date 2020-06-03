import React from 'react';
import styled from 'styled-components';


// styles start
const ButtonsContainer = styled.div`  
    position: absolute;
    top: 0;
    right: 0;
    justify-content: space-between;
    width: 150px;
    padding-left: 10px;

    @media print {
      display: none
    }
`;
const Button = styled.a`  
    display: inline-block;
    margin: 5px;
    width: 60px;
    height: 20px;
    text-decoration: none;
    font-size: 10pt;
    line-height: 20px;
    color: #000;
    border: 1px solid #000;
    border-radius: 20px;
    transition: background .2s linear, color .2s linear, border .2s linear;

    &:hover {
      background: #77B9DD;
      border: 1px solid #77B9DD;
      color: white;
    }
`;
// styles end

const ProjectButtons = (props) => {
  const linksArr = Object.entries(props);

  const links = linksArr.map((link, id) => {
    const name = link[0];
    const href = link[1];

    return (
      <Button
        href={href}
        key={id}
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </Button>
    );
  });

  return <ButtonsContainer>{links}</ButtonsContainer>;
};

export default ProjectButtons;
