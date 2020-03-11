import React from 'react'
import Head from 'next/head';


// Import asset...
import logoImg from '../../static/assets/images/logo.png';
// Import for custom styles...
import '../../static/style.css';
// Import for the custom plugins...
import { index } from '../../config/plugins';


// Import for the Xamin components...
import {HeaderStyle,Loader,BannerStyle1} from '../../components/xamin';

import Footer from '../../components/pages-section/footer';
import Home from '../../components/blog-section/blog-right-sidebar-grid-2/home';
import Main from '../../components/blog-section/blog-right-sidebar-grid-2/main';


//Components

class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeMenu:['#blog','#blog-right-sidebar-grid','/blog-right-sidebar-grid-2']
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
              
                <Head>
                    <title>Xamin - Data Science &amp; Analytics ReactJs Template</title>
                    <meta name="keywords" content="HTML5 Template" />
                    <meta name="description" content="Xamin - Data Science &amp; Analytics HTML5 Template" />
                    <meta name="author" content="http://iqonic.design/" />

                    <link rel="shortcut icon" href="./static/assets/images/favicon.ico" />
                </Head>

               
                <Loader />

                <HeaderStyle
                    className={"style-one"}
                    activeMenu ={this.state.activeMenu}
                    logoImg={logoImg}
                    buttonSection={(<div class="blue-btn button"> <a href="#">Get Started</a> </div>)}
                />
                < Home />
                <div className="main-content">
                    <Main />
                </div>
                <Footer />
            </>
        );
    }
}

export default Index;
