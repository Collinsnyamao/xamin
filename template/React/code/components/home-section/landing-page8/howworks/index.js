import React from 'react';

import { SectionTitle,SectionStyle3, CardStyle1 } from '../../../xamin';


class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items:[
                {
                    media: "./static/assets/images/services/07.png",
                    title: "Data for all your people",
                    text :"it is a long established fact that a reader will be distracted by the of readable"

                },
                {
                    media: "./static/assets/images/services/08.png",
                    title: "A new breed of AI",
                    text :"it is a long established fact that a reader will be distracted by the of readable"
                },
                {
                    media: "./static/assets/images/services/09.png",
                    title: "Analytics business",
                    text :"it is a long established fact that a reader will be distracted by the of readable"
                }
            ]
        }

    }

    render() {
        let { items } = this.state;
        return (
            <>
                <section className="pt-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    className={"title-box wow fadeInUp text-center"}
                                    spanclass={"title-design"}
                                    link={"HOW WE WORK"}
                                    title={"How Does Xamin Works"}
                                />
                            </div>
                        </div>

                        <div className="row">
                            {
                                    items.map((item,index) => (
                                        <div key={index} className="col-lg-4">
                                            <div className="consult-services wow fadeInUp large  text-center">
                                                <CardStyle1
                                                    media={item.media}
                                                    title={item.title}
                                                    text={item.text}
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