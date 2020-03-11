import React from 'react';

import {  SectionTitle, AdressSection} from '../../../xamin';
const Cards = (props) => {
    const cardList = props.cardList;
    return cardList.map((card, index) => (
        <div key={index}  className="iq-services-box wow fadeInUp text-left">
            <div className="services-content">
                    <h6>{card.hedaing}</h6>
                    <span class="progress-value">{card.value}</span>
                    <div class="iq-progress-bar"> <span class="position-relative" data-percent="60"></span> </div>
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

                   hedaing:"Data Science Capstone",
                   value:"60%"  
               },
               {

                    hedaing:"Python",
                    value:"70%"  
                },
                {

                    hedaing:"Machine Learning",
                    value:"80%"  
                }
           ],
           data1:[
            {

                hedaing:"SQL",
                value:"80%"  
            },
            {

                 hedaing:"Tableau",
                 value:"65%"  
             },
             {

                 hedaing:"java",
                 value:"70%"  
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
                                    title={"Skills"}
                                />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 col-lg-5 col-md-5">
                             <Cards cardList={this.state.data} />
                        </div>
                        <div class="col-sm-12 col-lg-5 col-md-5 offset-md-2">
                            <Cards cardList={this.state.data1} />
                        </div>


                    </div>
                </div>
            </section>
            </>
        );
    }
}

export default Index;
