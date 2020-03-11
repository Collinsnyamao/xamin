import React from 'react';

const Index = (props) => {

    return (
        <>
            <div class="col-lg col-md-6 ">
                <div class="fancybox-userbehavior wow fadeInUp  text-left">
                    <h6 class="mb-2">{props.title}</h6>
                    <div class="analytics-icon"> <i aria-hidden="true" class={props.icon}></i> </div>
                </div>
            </div>
</>
    );
};

export default Index;
