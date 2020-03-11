import React from 'react';

const Index = (props) => {

    return (
        <>
        <div class="col-lg-4 col-md-6 ">
            <div class={props.className}>
                <div class="service-box-icon">
                    <img src={props.images} alt="fancybox" />
                </div>
                <div class="service-box-detail">
                    <h4 class="mb-2">{props.name}</h4>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Index;
