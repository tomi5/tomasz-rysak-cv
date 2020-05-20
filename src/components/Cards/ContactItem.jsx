import React from 'react';


const ContactItem = (props) => {

    const { value, href, ariaLabel, icon } = props.item

    return (
        <li>
            <span
                className={icon}
                aria-label={ariaLabel}></span>
            {
                href ? (
                    <a
                        href={href}>
                        {value}
                    </a>
                ) : (
                        <p>{value}</p>
                    )
            }

        </li>);
}

export default ContactItem