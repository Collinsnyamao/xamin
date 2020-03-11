import React from 'react';

import { SectionTitle, CardStyle1 } from '../../../xamin';

class Index extends React.Component {
    constructor(props) {
        super(props);
       this.state ={
           items:[
               {
                   media: "./static/assets/images/services/01.png",
                   title: "Data for all your people",
                   text :"it is a long established fact that a reader will be distracted by the of readable",
                   class:"xamin-process xamin-circle right wow fadeInUp  text-center"

               },
               {
                    media: "./static/assets/images/services/02.png",
                    title: "A new breed of AI",
                    text :"it is a long established fact that a reader will be distracted by the of readable",
                    class:"xamin-process xamin-circle right wow fadeInUp  text-center"

                },
                {
                    media: "./static/assets/images/services/03.png",
                    title: "Analytics business",
                    text :"it is a long established fact that a reader will be distracted by the of readable",
                    class:"xamin-process xamin-circle  wow fadeInUp  text-center"

                }
           ]
       }
    }

    render() {
        const {items } = this.state;

        return (
            <>
               <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <SectionTitle
                                    link="PROCESS"
                                    title="What you can do with marketing analytics"
                                    className = "title-box wow fadeInUp text-center"
                                    spanclass="title-design"
                                />
                            </div>
                        </div>
                            <div className="row">
                                {
                                    items.map((item,index) => (
                                        <div key={index}  className="col-md-4 col-sm-12">
                                            <div className={item.class}>
                                                <CardStyle1
                                                    media={item.media}
                                                    title ={item.title}
                                                    text= {item.text}
                                                    imgClass="circle-effect"
                                                />
                                            </div>
                                        </div>
                                    ))
                                }
                        </div>
                    </div>
                </section>
              
            </>
        );
    }
}

export default Index;
