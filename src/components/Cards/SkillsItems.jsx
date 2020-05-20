import React from 'react';


const SkillsItems = ({ lang, item }) => {

    const { itemHeader, skillsItem } = item;

    return (
        <li>
            <h4>{itemHeader[lang]}</h4>
            <ul>
                {
                    skillsItem[lang] ? (
                        skillsItem[lang].map((item, id) =>
                            <li key={id}>{item}</li>
                        )
                    ) : (
                            skillsItem.map((item, id) =>
                                <li key={id}>{item}</li>
                            )
                        )
                }
            </ul>
        </li>
    );
}

export default SkillsItems