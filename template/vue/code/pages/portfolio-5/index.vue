<template>
  <div>
    <BreadCrumb crumb-title="Portfolio 5 Columns" :crumb-media="image" :crumb-links="links" />
    <div class="main-content">
      <Isotope grid-class="iq-masonry iq-columns-5" />
    </div>
    <Footer />
  </div>
</template>
<script>
import Isotope from '../../components/Masonry/Isotope'
import Footer from '../../components/FooterStyle1/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'OurCases',
  components:{
    Isotope,
    Footer
  },
  data(){
    return{
      image: require('../../assets/images/about-us/04.png'),
      links: [{
        title : 'Home' ,
        href : 'landing-page-1'
      }]
    }
  },
  mounted () {
      setTimeout(function () {
      themes.index()
    }, 1000)
  }
}
</script>