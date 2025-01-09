import React from "react";
import styled from "styled-components";

// styles start
const ButtonsContainer = styled.div`
  flex: 0 0 145px;
  padding-left: 10px;
  align-items: flex-end;
  display: flex;
`;
const Button = styled.a`
  display: inline-block;
  margin: 5px;
  width: 45px;
  height: 16px;
  text-decoration: none;
  font-size: 7pt;
  line-height: 16px;
  color: #fff;
  background: #55b9f3 0% 0% no-repeat padding-box;
  box-shadow: 1px 2px 4px #489dcfa3;
  border-radius: 11px;
  transition: background 0.3s;

  &:hover {
    background: #12a7ff;
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
      <Button href={href} key={id} target="_blank" rel="noopener noreferrer">
        {name}
      </Button>
    );
  });

  return <ButtonsContainer>{links}</ButtonsContainer>;
};

export default ProjectButtons;
