import React from 'react';

import {  SectionTitle, WaveBox} from '../../../xamin';

class   Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
           
            checkList:[
                "Marketing Tracking",
                "Services and Solutions",
                "Predicting future",
                "Reporting on the pas",
                "Google Analytics",
                "Analyzing the present"
            ],
        }
    }

    render() {
        let { cardData,checkList } = this.state;
        return (
            <>
                <section>
                  <div className="container">
                        <div className="row">
                            <div className="col-lg-6  wow fadeInUp xamin-left-img">
                             <img src="./static/assets/images/about-us/17.png" alt="about-2" />
                                <div class="scroll-effect top blue ">
                                    <div class="main-video">
                                        <div class="video-img">
                                            <WaveBox />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 wow fadeInUp align-items-center">
                                <SectionTitle
                                    className={"title-box wow fadeInUp text-left"}
                                    title={"About Marketing Analytics"}
                                    subTitle={"Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!"}
                                />
                                <div class="text-left column-2 mb-5 ">
                                    <ul class="iq-list">
                                    <li><i class="ion ion-checkmark-round"></i><span>Marketing Tracking</span></li>
                                    <li><i class="ion ion-checkmark-round"></i><span>Services and Solutions</span></li>
                                    <li><i class="ion ion-checkmark-round"></i><span>Predicting future</span></li>
                                    <li><i class="ion ion-checkmark-round"></i><span>Reporting on the pas</span></li>
                                    <li><i class="ion ion-checkmark-round"></i><span>Google Analytics</span></li>
                                    <li><i class="ion ion-checkmark-round"></i><span>Analyzing the present</span></li>
                                    </ul>
                                </div>
                                <div class=" text-left mt-5 ">
                                    <a class="button button-icon" href="about-us.html"> <span class="btn-effect">View Details</span> </a>
                                </div>
                        </div>
                        </div>
                  </div>
                </section>
            </>
        );
    }
}

export default Index;
