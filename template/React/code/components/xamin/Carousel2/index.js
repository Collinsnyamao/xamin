import React from 'react';

const Index = (props) => {

    return (
        <>
            <div class={props.mainClass}>
                    <img src={props.img} alt="slider" />
                    <div class="details-box clearfix">
                        <div class="consult-details">
                            <h5>{props.title}</h5>
                                <p class="mb-0">{props.text}</p>
                        </div>
                       {props.children}
                    </div>
                </div>
        </>
    );
};

export default Index;