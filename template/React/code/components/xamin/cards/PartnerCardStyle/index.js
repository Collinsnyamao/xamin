import React from 'react';

const Index = (props) => {

    return (
        <>
            <div class={props.mainClass + " wow fadeInUp"} style={{visibility: "visible", animationName: "fadeInUp"}}>
                <div class={props.imgClass}>
                    <img src={props.img} alt="fancybox" />
                </div>
                <div class={props.detailClass}>
                    <h6 class="mb-1">{props.heading}</h6>
                    <p class="mb-0">{props.text}</p>
                </div>
            </div> 
        </>
    );
};

export default Index;
