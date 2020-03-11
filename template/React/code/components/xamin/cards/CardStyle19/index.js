import React from 'react';

const Index = (props) => {

    return (
        <>
                <div class={"consult-services  xamin-square wow fadeInUp  text-left" +props.mainClass} >
                { props.mainClass ? (<div class="arrow_img">
                         <img class="arrow-img" src="./static/assets/images/fancybox/arrow-7.png" alt="fancybox"/>
                     </div>) : ''}
                     
                <div class="square-effect bg">
                    <img src={props.img} alt="fancybox" />
                        <div class="arrowbg_img">
                            <img src="./static/assets/images/fancybox/bg-7-1.png" alt="fancybox" />
                         </div>
                </div>
                <h5 class="mb-2">{props.title}</h5>
                <p class="mb-0">{props.text}</p>
                </div>
        </>
    );
};

export default Index;
