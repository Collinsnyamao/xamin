import React from 'react';

const Index = (props) => {

    return (
        <>
            <div class="iq-pricing ">
                <div class="priceing-title ">
                    <h2>{props.price}<span>/Month</span></h2>
                    <p class="mb-0"></p>
                </div>
                <div class="priceing-description ">
                    <h4 class="title mb-3">{props.heading}</h4>
                    <h5 class="subtitle mb-3">{props.subheading}</h5>
                         {props.children}
                </div>
                </div>
        </>
    );
};
export default Index;