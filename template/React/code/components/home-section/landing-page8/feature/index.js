import React from 'react';

import { SectionTitle,CardStyle16, CardStyle13 } from '../../../xamin';


class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cardData: [
                {
                    icon: "flaticon flaticon-verification",
                    title: "Behavioral-Analytics"
                    
                },
                {
                    icon: "flaticon flaticon-accounting",
                    title: "Stock Management"
                    
                },
                {
                    icon: "flaticon flaticon-idea",
                    title: "Receivable &amp; Payables"
                    
                },  
                {
                    icon: "flaticon flaticon-planning-1",
                    title: "Manage Bills &amp; Expenses"
                    
                }, 
                {
                    icon: "flaticon flaticon-transfer",
                    title: "SMS Reminders"
                    
                },  
            

               
            ],
            cardData1 :[
                {
                    icon: "flaticon flaticon-support",
                    title: "Auto Sync & Backup"
                    
                },   
                {
                    icon: "flaticon flaticon-plan",
                    title: "Ready & Return Filing"
                    
                },   
                {
                    icon: "flaticon flaticon-research",
                    title: "60+ detailed reports"
                    
                },   
                {
                    icon: "flaticon flaticon-research",
                    title: "Product Details"
                    
                },               
                {
                    icon: "flaticon flaticon-customer-1",
                    title: "Customized Rates"
                    
                },   
            ]
        }

    }

    render() {
        let { cardData , cardData1} = this.state;
        return (
            <>
              <section className="pt-0">
                <div className="container">
                     <div className="row">
                        <div className="col-md-8">
                                <SectionTitle
                                    className={"title-box wow fadeInUp  text-left"}
                                    spanclass={"title-design"}
                                    title={"Popular features that your business needs"}
                                    subTitle={"Bleeding about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!"}
                                />
                        </div>
                        <div class="col-md-4   align-self-center">
                            <div class=" text-center">
                                <a class="button button-icon" href="#"><span class="btn-effect"> Explore more features</span></a>
                            </div>
                        </div>
                     </div>

                     <div className="row mt-5 mt-md-0">
                            { cardData.map((item, index) => (
                                <CardStyle16 
                                    icon ={item.icon}
                                    title ={item.title}
                                />
                            )) }
                     </div>

                     <div className="row">
                            { cardData1.map((item, index) => (
                                <CardStyle16 
                                    icon ={item.icon}
                                    title ={item.title}
                                />
                            )) }
                     </div>
                </div>
               </section>
            </>
        );
    }

}

export default Index;