import React from 'react';

const Index = (props) => {

    return (
        <>
            
            <div class="fancy_service style2 wow fadeInUp  text-left">
                    <div class="bg_img"> 
                        <img class="bg_img-img" src="./static/assets/images/fancybox/bg-7-2.png" alt="fancybox" />
                    </div>
                    <div class="fancy_block">
                        <div class="fancy-info">
                            <h4 class="mt-4 mb-3 title">{props.title}</h4>
                            <p class="text-dark">{props.text}</p>
                            <a class="button blue-btn" href="#"><span class="btn-effect"> Find Out More</span></a>
                        </div>
                        <div class="fancy_img">
                            <img src={props.fancy_img} alt="fancybox" />
                        </div>
                    </div>
                </div>
            
        </>
    );
};

export default Index;
