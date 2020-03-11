import React from 'react';

const Index = (props) => {

    return (
        <>
               <ul>
                    <li class={props.liClass}>
                        <a href="#">{props.link}</a>
                        <span class={props.spanClass}> {props.count} </span>
                    </li>
               </ul>
        </>
    );
};

export default Index;
