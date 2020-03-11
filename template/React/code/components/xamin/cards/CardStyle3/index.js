import React from 'react';

const Index = (props) => {

    return (
        <>
            <div class={props.mainClass}>
                <div class="iq-img">
                    <img src={props.img} alt="fancybox" /> 
                </div>
                <div class="timer-details ">
                    {props.children}
                </div>
            </div>

        </>
    );
};

export default Index;