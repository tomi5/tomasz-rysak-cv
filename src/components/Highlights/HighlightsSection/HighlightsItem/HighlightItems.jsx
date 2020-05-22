import React, { Component } from "react";
import LangContext from "../../../../LangContext";

class HighlightItems extends Component {
  makeSectionItem = (item, sectionName, lang) => {
    switch (sectionName) {
      case "contact":
        return item.map((item, id) => {
          const { value, href, ariaLabel, icon } = item;
          return (
            <li key={id}>
              <span className={icon} aria-label={ariaLabel}></span>
              {
                href ? 
                (
                  <a href={href}>{value}</a>
                ) : (
                  <p>{value}</p>
                )
              }
            </li>
          );
        });
      case "skills":
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
      case "languages":
      case "hobby":
        return item[lang].map((item, id) => <li key={id}>{item}</li>);
      default:
        return;
    }
  };

  render() {
    const lang = this.context;
    const { sectionName, sectionItem } = this.props;

    return this.makeSectionItem(sectionItem, sectionName, lang);
  }
}

HighlightItems.contextType = LangContext;

export default HighlightItems;
