import React from 'react';
import { CardStyle14, CheckboxList ,TestimonialStyle1} from '../../../xamin';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            cards :[
                {
                    image:"./static/assets/images/team/1.jpg",
                    title:"Anna Mull",
                    subtitle:"COO",
                    share:[
                        {
                            className:"fa fa-facebook-f",
                            link:"#",
                        },
                        {
                            className:"fa fa-twitter",
                            link:"#",
                        },
                        {
                            className:"fa fa-instagram",
                            link:"#",
                        },
                    ]
                },
                {
                    image:"./static/assets/images/team/2.jpg",
                    title:"Petey Cruiser",
                    subtitle:"Project Manager",
                    share:[
                        {
                            className:"fa fa-facebook-f",
                            link:"#",
                        },
                        {
                            className:"fa fa-twitter",
                            link:"#",
                        },
                        {
                            className:"fa fa-instagram",
                            link:"#",
                        },
                    ]
                },
                {
                    image:"./static/assets/images/team/3.jpg",
                    title:"Greta Life",
                    subtitle:"Greta Life",
                    share:[
                        {
                            className:"fa fa-facebook-f",
                            link:"#",
                        },
                        {
                            className:"fa fa-twitter",
                            link:"#",
                        },
                        {
                            className:"fa fa-instagram",
                            link:"#",
                        },
                    ]
                },
                {
                    image:"./static/assets/images/team/4.jpg",
                    title:"Marcash Dane",
                    subtitle:"Project Manager",
                    share:[
                        {
                            className:"fa fa-facebook-f",
                            link:"#",
                        },
                        {
                            className:"fa fa-twitter",
                            link:"#",
                        },
                        {
                            className:"fa fa-instagram",
                            link:"#",
                        },
                    ]
                },
                {
                    image:"./static/assets/images/team/5.jpg",
                    title:"Handry White",
                    subtitle:"Project Manager",
                    share:[
                        {
                            className:"fa fa-facebook-f",
                            link:"#",
                        },
                        {
                            className:"fa fa-twitter",
                            link:"#",
                        },
                        {
                            className:"fa fa-instagram",
                            link:"#",
                        },
                    ]
                },
            ],
            cardData:[
                {
                  icon :"flaticon flaticon-growth",
                  title:"Big Data Consulting",
                  desc :"It is a long established fact that a reader will be distracted"
                },
                {
                  icon :"flaticon flaticon-grouping",
                  title:"Apache Hadoop",
                  desc :"It is a long established fact that a reader will be distracted"
                },
              ],
              cardData2:[
                {
                    icon :"flaticon flaticon-cloud-1",
                    title:"Apache Spark",
                    desc :"It is a long established fact that a reader will be distracted"
                  },
                  {
                    icon :"flaticon flaticon-box",
                    title:"Apache Cassandra",
                    desc :"It is a long established fact that a reader will be distracted"
                  },
              ],
            checklist1:[
                'Efficiently manage and govern ongoing operations of analytics processes',
                'Access on-demand data scientists to quickly scale your analytics team',
                'Rapid time to insight',
                'Lower operating cost and business risk'
            ]
        }
    }
    render() {
        let { cards,cardData,cardData2,checklist1} = this.state;
        return (
            <>
              
                    <div class="row iq-pb-45">
                        <div class="col-sm-12 col-lg-6 col-md-6">
                            <div class="services-finance-img text-center">
                                    <img width="400" height="400" src="./static/assets/images/about-us/04.png" class="attachment-full" alt="" /> 
                            </div>
                        </div>
                        <div class="mt-5 mt-lg-0 mt-md-0 col-sm-12 col-lg-6 col-md-6">
                           <h3 class="text-left">Our Services</h3>
                           <div class="mb-3">
                              <p class="mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                           </div>
                           <div class="text-left ">
                              <ul class="iq-list">
                                 <CheckboxList items={checklist1} text={"text-left"} />
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div class="row">
                        { cardData.map((item, index) => (
                            <CardStyle14
                                icon={item.icon} 
                                title={item.title} 
                                desc={item.desc} 
                                mainClass={"service-box my-3 wow fadeInUp  text-left"}
                        />       
                        )) }
                     </div>

                     <div className="row iq-pb-30">
                        { cardData2.map((item, index) => (
                                <CardStyle14
                                    icon={item.icon} 
                                    title={item.title} 
                                    desc={item.desc} 
                                    mainClass={"service-box my-3 wow fadeInUp  text-left"}
                            />       
                            )) }
                     </div>


                     <div class="row iq-pb-45">
                        <div class="col-md-12">
                           <div class="wrapper">
                              <div>
                                 <canvas id="data-visualization"></canvas>
                              </div>
                              <ul id="js-legend" class="chart-legend"></ul>
                           </div>
                        </div>
                     </div>
                    
                     <div class="row">
                        <div class="col-md-12">
                           <h3 class="text-left mb-4">Service development Specialist</h3>
                           <div class="row">
                                <div class="col-md-12">
                                  <div class="owl-carousel owl-loaded owl-drag" data-dots="false" data-nav="false" data-items="3" data-items-laptop="3" data-items-tab="2" data-items-mobile="2" data-items-mobile-sm="1" data-autoplay="true" data-loop="true" data-margin="30">
                                  {
                                        cards.map((item,index) => (
                                            <div key={index} className="item text-left">
                                                <TestimonialStyle1
                                                    image={item.image}
                                                    title={item.title}
                                                    subtitle={item.subtitle}
                                                    share={item.share}
                                                />
                                            </div>
                                        ))
                                    }
                                   </div>
                                </div>
                            </div>
                        </div>
                     </div>
            </>
        );
    }
}

export default Index;