/* eslint-disable no-shadow */
import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneVolume, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import LangContext from '../../../../LangContext';

// styles start
const ContactWrapper = styled.li`
    display: flex;
    padding: 5px 0;
    align-items: center;
`;

const sharedStyle = css`   
    font-size: 10pt;
    text-align: left;
    display: block;
    padding-left: 12px;
    color: #fff;
`;

const ContactLink = styled.a`
  ${sharedStyle}
  transition: color .2s linear;

  &:hover {
    color: #000;
  }
`;
const ContactAddress = styled.p`
  ${sharedStyle}
`;
const StyledIcon = styled(FontAwesomeIcon)`
 margin-left: 5px
`;

const SkillsName = styled.h4`
    font-size: 10pt;
    padding-top: 10px;
    font-weight: normal;
    text-decoration: underline;
    text-align: left;
`;
const SkillItem = styled.li`
    font-size: 10pt;    
    margin-left: 20px;
    list-style-type: disc;
    text-align: left;
`;
// styles end

const HighlightItems = ({ sectionName, sectionItem }) => {
  const lang = useContext(LangContext);


  const makeSectionItem = (item, sectionName, lang) => {
    switch (sectionName) {
      case 'contact':
        return item.map((item, id) => {
          const {
            value, href, ariaLabel, name,
          } = item;
          const icon = (
            (name === 'telephone' && faPhoneVolume)
            || (name === 'email' && faEnvelope)
            || (name === 'gitHub' && faGithub)
            || (name === 'linkedIn' && faLinkedin)
            || (name === 'address' && faMapMarkerAlt)
          );
          return (
            <ContactWrapper key={id}>
              <StyledIcon
                icon={icon}
                size="md"
                aria-label={ariaLabel}
              />
              {
                href
                  ? (
                    <ContactLink
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {value}
                    </ContactLink>
                  ) : (
                    <ContactAddress>{value}</ContactAddress>
                  )
              }
            </ContactWrapper>
          );
        });
      case 'skills':
        return item.map((item, id) => {
          const { itemHeader, skillsItem } = item;
          return (
            <li key={id}>
              <SkillsName>{itemHeader[lang]}</SkillsName>
              <ul>
                {skillsItem[lang]
                  ? skillsItem[lang].map((item, id) => <SkillItem key={id}>{item}</SkillItem>)
                  : skillsItem.map((item, id) => <SkillItem key={id}>{item}</SkillItem>)}
              </ul>
            </li>
          );
        });
      case 'languages':
      case 'hobby':
        return item[lang].map((item, id) => <SkillItem key={id}>{item}</SkillItem>);
      default:
        return false;
    }
  };

  return makeSectionItem(sectionItem, sectionName, lang);
};

export default HighlightItems;
