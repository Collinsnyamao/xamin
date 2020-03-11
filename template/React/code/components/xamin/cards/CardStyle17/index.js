import React from 'react';

const Index = (props) => {

    return (
        <>
            
                <div class="fancy_service wow fadeInUp  text-center" >
                    <div class="hover-effect"></div>
                    <div class="fancy-info">
                        <img src={props.img} alt="fancybox" />
                        <h4 class="mt-4 mb-3 title">{props.title}</h4>
                        <p class="">{props.text}</p>
                        <a class="link-btn" href="#"><span class="btn-effect"> Read More<i class="fa fa-angle-right"></i></span></a>
                    </div>
                </div>
            
        </>
    );
};

export default Index;
