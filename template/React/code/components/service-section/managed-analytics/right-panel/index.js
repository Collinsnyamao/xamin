import React from 'react';
import { BannerStyle1, CheckboxList } from '../../../xamin';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            owlImages:[
                "./static/assets/images/about-us/04.png",
                "./static/assets/images/about-us/03.png",
            ],
            checklist:[
                'Advance Advisory Team',
                'Professional Consulting Services',
                '24/7 Support Help Center',
                'Customer Service & Operations',
                'There are many variations of passages.'
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
        let { owlImages, checklist ,checklist1} = this.state;
        return (
            <>
              
              <div class="row iq-pb-45">
                        <div class="col-sm-12">
                           <div class="no-margin services-finance-img  text-center">
                              <img width="400" height="400" src="./static/assets/images/about-us/02.png" class="attachment-full" alt=""  />
                           </div>
                        </div>
                        <div class="mt-5 mt-lg-0 mt-md-0 col-sm-12 col-lg-6 col-md-6">
                           <h3>Our Services</h3>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                           <div class="text-left">
                              <ul class="iq-list">
                                     <CheckboxList items={checklist1} text={"text-left"} />
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div class="row">
                        <div class="col-sm-12">
                           <div class="no-margin">
                              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything.</p>
                           </div>
                        </div>
                     </div>
                     <div class="row iq-pb-45">
                        <div class="col-sm-12">
                           <div class="">
                              <canvas id="managed-data-analytics" width="750" height="420"></canvas>
                           </div>
                           <ul id="js-legend" class="chart-legend"></ul>
                        </div>
                     </div>
                     <div class="row">
                        <div class="col-sm-12">
                           <h2>Transition</h2>
                           <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&#8217;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&#8217;t anything embarrassing hidden in the middle of text.</p>
                           <div class="row">
                              <div class="col-sm-6">
                                 <div class="text-left mb-2 mb-lg-0 mb-md-0 ">
                                    <ul class="iq-list">
                                        <CheckboxList items={checklist} text={"text-left"} />
                                    </ul>
                                 </div>
                              </div>
                              <div class="col-sm-6">
                                 <div class="text-left">
                                    <ul class="iq-list">
                                        <CheckboxList items={checklist} text={"text-left"} />
                                    </ul>
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