/* eslint-disable no-shadow */
import React, { useContext } from 'react';
import LangContext from '../../../../LangContext';


const HighlightItems = ({ sectionName, sectionItem }) => {
  const lang = useContext(LangContext);

  const makeSectionItem = (item, sectionName, lang) => {
    switch (sectionName) {
      case 'contact':
        return item.map((item, id) => {
          const {
            value, href, ariaLabel, icon,
          } = item;
          return (
            <li key={id}>
              <span className={icon} aria-label={ariaLabel} />
              {
                href
                  ? (
                    <a href={href}>{value}</a>
                  ) : (
                    <p>{value}</p>
                  )
              }
            </li>
          );
        });
      case 'skills':
        return item.map((item, id) => {
          const { itemHeader, skillsItem } = item;
          return (
            <li key={id}>
              <h4>{itemHeader[lang]}</h4>
              <ul>
                {skillsItem[lang]
                  ? skillsItem[lang].map((item, id) => <li key={id}>{item}</li>)
                  : skillsItem.map((item, id) => <li key={id}>{item}</li>)}
              </ul>
            </li>
          );
        });
      case 'languages':
      case 'hobby':
        return item[lang].map((item, id) => <li key={id}>{item}</li>);
      default:
        return false;
    }
  };

  return makeSectionItem(sectionItem, sectionName, lang);
};

export default HighlightItems;
