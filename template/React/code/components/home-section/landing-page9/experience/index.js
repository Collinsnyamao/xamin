import React from 'react';

import {  SectionTitle, AdressSection} from '../../../xamin';
const Cards = (props) => {
    const cardList = props.cardList;
    return cardList.map((card, index) => (
        <div key={index}  className={"timeline-article " +card.mainclass}>
            <div class="meta-date"></div>
            <div class="content-box">
                <div class="iqtml-top-box">
                    <div class="data1">
                        <h4 class="title">{card.title}</h4>
                        <h6 class="primary-color">{card.subtitle}</h6>
                    </div>
                    <div class="data2">
                        <span><i class="fa fa-calendar"></i>2006-2007</span>
                        <span><i class="fa fa-map-marker"></i>Paris, france</span>
                    </div>
                </div>
                <ul class="iq-contant">
                    <li>Learn a group of 5 people</li>
                </ul>
                <ul class="iq-contant">
                    <li> Passages of Lorem Ipsum available.</li>
                </ul>
                <ul class="iq-contant">
                    <li>Easy to Customize List passages of  available.</li>
                </ul>
        </div>
        </div>
           
    ));
};

class   Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
           data:[
               {
                   mainclass:"content-right-container",
                   title:"Data Scientist",
                   subtitle:"Keeping Group"
               },
               {
                    mainclass:"content-left-container",
                    title:"Data Intelligence",
                    subtitle:"Keeping Group"
                },
                {
                    mainclass:"content-right-container",
                    title:"Data Analytics",
                    subtitle:"Keeping Group"
                },
                {
                    mainclass:"content-left-container",
                    title:"Data Scientist",
                    subtitle:"Big Data Services"
                }
           ]
        }
    }

    render() {
        return (
            <>
                  <section class="pt-0">
                     <div class="container">
                        <div class="row ">
                            <div class="col-md-12">
                            <SectionTitle
                                        className={"title-box wow fadeInUp text-center"}
                                        spanclass={"title-design"}
                                        link={"PROCESS"}
                                        title={"Experience"}
                                    
                                    />
                            </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                           <div class="main-timeline-section ">
                              <div class="conference-center-line"></div>
                              <div class="conference-timeline-content">
                                  <Cards cardList={this.state.data} />
                              </div>
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
