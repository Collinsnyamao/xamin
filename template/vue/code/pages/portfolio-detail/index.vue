<template>
  <div>
    <BreadCrumb crumb-title="Portfolio Details" :crumb-media="image" :crumb-links="links" />
    <div class="main-content">
        <Client />
    </div>
    <Footer />
  </div>
</template>
<script>
import Client from '../../components/PortfolioDetail/Client'
import Footer from '../../components/FooterStyle1/Footer'
export default {
  layout: 'OurCases',
  components:{
    Client,
    Footer
  },
  data(){
    return{
      links:[
        {
          title: 'Home',
          href: 'landing-page-1'
        },
        {
          title: 'Portfolio',
          href: 'portfolio-detail'
        }
      ],
      image: require('../../assets/images/about-us/04.png')
    }
  }

}
</script>