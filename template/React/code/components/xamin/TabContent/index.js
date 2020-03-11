import React from 'react';

const Index = (props) => {
    return (
        <>
                <p>{props.text}</p>
                <div class=" text-left  ">
                    <a class="button button-icon" href="#">
                        <span class="btn-effect"> {props.buttonname}</span>
                    </a>
                </div>
        </>
    );
}

export default Index;
