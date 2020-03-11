import React from 'react';

import { AboutStyle, SectionTitle, CheckboxList, ContactUs} from '../../../xamin';

class   Index extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value: [
                {
                   icon:"fa fa-phone",
                   title:"Phone support",
                   link1:"+0123456789",
                   link2:"+0123456789"

                },
                {
                    icon:"fa fa-map-marker",
                    title:"Email us",
                    link1:"+support@iqnonicthemes.com",
                    link2:"support@iqnonicthemes.com<"
                },
                
                
           
        ]
        }
    }

    render() {
        const data =this.state.value;

        return (
            <>
                <section className="xamin-primary-bg">
                    <div className="container">
                        <div class="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <form method="post" novalidate="novalidate">
                                    <div className="predict-form  consultab-contact contact-form">
                                        <div>
                                            <h4 class="title mb-4 text-center">Talk With Our Expert</h4>
                                        </div>
                                        <div class=""> <input type="text" name="your-name" class="form-control text " placeholder="Your Name" /> </div>
                                        <div class=""> <input type="text" name="your-email" class="form-control text " placeholder="Your Email" /> </div>
                                        <div class=""> <textarea name="your-message" cols="40" rows="5" class="form-control textarea " placeholder="Your Message" ></textarea> </div>
                                        <div> <button id="submit-4" name="submit" type="submit" value="Send" class="button d-block w-100">Send Message</button> </div>
                                    </div>
                                </form>
                            </div>

                            <div  className="col-lg-6 col-md-6 col-sm-12">
                                { data.map((item, index) => (
                                    <div key={index} className="contact-box d-flex  text- text-white ">
                                            <i aria-hidden="true" class={item.icon}></i> 
                                            <div class="service-detail">
                                                <h2 class="mb-2  text-white " >{item.title}</h2>
                                                <ul class="list-inline mb-0">
                                                <li><a href="tel:+0123456789"> {item.link1}</a> </li>
                                                <li><a href="tel:+0123456789">{item.link2}</a></li>
                                                </ul>
                                            </div>
                                    </div>
                                )) }
                            </div>
                        </div>

                    </div>


                </section>
            </>
        );
    }
}

export default Index;
