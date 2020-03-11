import React from 'react';
import $ from 'jquery';

import { SectionTitle, BackgroundImage } from '../../../xamin';


const List = (props) => {
    const listItems = props.tabs;
    const list = listItems.map((item, index) => (
       <li className="list-inline-item">
            <div class="feature-info">
                <div class="feature-img">
                    <img class="img-fluid client-img" src={item.img} alt="image0" />
                </div>
                <h6>{item.title}</h6>
            </div>

       </li>
    ));

    return (
        <>
            <ul  className="list-inline mb-0">
                { list }
            </ul>
        </>
    );
};


class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cardData: [
                {
                   img:"./static/assets/images/fancybox/6-5.png",
                   title:"Business performance"
                },
                {
                    img:"./static/assets/images/fancybox/6-6.png",
                    title:"Business performance"
                },
                {
                    img:"./static/assets/images/fancybox/6-5.png",
                    title:"Business performance"
                },
                {
                    img:"./static/assets/images/fancybox/6-6.png",
                    title:"Business performance"
                },
                {
                    img:"./static/assets/images/fancybox/6-7.png",
                    title:"Business performance"
                },
                {
                    img:"./static/assets/images/fancybox/6-8.png",
                    title:"Business performance"
                },
                {
                    img:"./static/assets/images/fancybox/6-6.png",
                    title:"Business performance"
                },
                {
                    img:"./static/assets/images/fancybox/6-7.png",
                    title:"Business performance"
                },
               
            ]
        }
    }

    render() {
        const tabs = this.state.cardData;
        return (
            <>
              <section className="iq-feture-bg">
              <BackgroundImage
                    className="iq-feture-bg"
                    bgImage="./static/assets/images/feature.png"
              >
                  <div className="container">
                      <div className="row align-items-center">
                          <div className="col-md-6">
                                 <SectionTitle
                                    className={"title-box wow fadeInUp pr-lg-5 text-left"}
                                    spanclass={"title-design"}
                                    title={"What can you do with predictive analytics"}
                                    subTitle={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum."}
                                />
                          </div>
                          <div className="col-md-6">
                            <div class="xamin-feature-circle wow zoomIn postion-relative">
                                <div className="xamin-img">
                                    <List tabs={tabs} />
                                </div>
                                <div class="dot-circle">
                                    <div class="effect-circle"></div>
                                </div>
                                <div class="main-circle">
                                    <div class="circle-bg">
                                        <img src="./static/assets/images/fancybox/6-9.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                          </div>
                      </div>

                  </div>
                  </BackgroundImage>
              </section>
            </>
        );
    }

}

export default Index;