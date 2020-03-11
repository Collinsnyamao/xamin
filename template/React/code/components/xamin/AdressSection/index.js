import React from 'react';

const Index = (props) => {

    return (
        <>
                <li className={props.class}>
                    <a>
                        <i class={props.icon}></i>
                        <span class="header">{props.heading}</span>
                        <span class="content">:{props.text}</span>
                    </a>
                </li>
        </>
    );
};

export default Index;