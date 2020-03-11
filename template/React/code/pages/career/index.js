import React from 'react'
import Head from 'next/head';


// Import asset...
import logoImg from '../../static/assets/images/logo.png';
// Import for custom styles...
import '../../static/style.css';
// Import for the custom plugins...
import { index } from '../../config/plugins';


// Import for the Xamin components...
import {HeaderStyle,Loader,ScrollTop,BannerStyle1} from '../../components/xamin';

import Career from '../../components/pages-section/career';
import Footer from '../../components/pages-section/footer';


//Components

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeMenu:['#contact','/career'],
            breadcrumb:[
                {
                    title:'Home',
                    href:'/landing-page1',
                    active:false
                },
                {
                    title:'Career',
                    href:'#',
                    active:true
                }
            ]
        };
    }

    componentDidMount(props) {

        setTimeout( () => {
            index();
        }, 500);

    }

    render() {
        return (
            <>
                {/* Heading section */}
                <Head>
                    <title>Xamin - Data Science &amp; Analytics ReactJs Template</title>
                    <meta name="keywords" content="HTML5 Template" />
                    <meta name="description" content="Xamin - Data Science &amp; Analytics HTML5 Template" />
                    <meta name="author" content="http://iqonic.design/" />

                    <link rel="shortcut icon" href="./static/assets/images/favicon.ico" />
                </Head>

                {/* Loader section */}
                <Loader />

                {/* header section*/}
                <HeaderStyle
                    className={"style-one"}
                    activeMenu ={this.state.activeMenu}
                    logoImg={logoImg}
                    buttonSection={(<div class="blue-btn button"> <a href="#">Get Started</a> </div>)}
                />

               
                <div className="text-left iq-breadcrumb-one iq-bg-over black ">
                    <div className="container">
                        <div className="row align-items-center">
                                    <div className="col-lg-8 col-md-8 text-left align-self-center">
                                    <BannerStyle1
                                        title={"Careers"}
                                        breadcrumb={this.state.breadcrumb}
                                        image={'./static/assets/images/about-us/04.png'}
                                     />
                                       
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-12 text-right wow fadeInRight start_animation animated">
                                        <img src="./static/assets/images/about-us/04.png" class="img-fluid float-right" alt="banner" />
                                    </div>
                        </div>
                    </div>
                </div>
                <div className="main-content">
                    <Career />
                </div>
                <Footer />
            </>
        );
    }
}

export default Index;
