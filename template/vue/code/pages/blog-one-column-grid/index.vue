<template>
  <div>
    <BreadCrumb crumb-title="One Column Blog" :crumb-media="image" :crumb-links="links" />
    <div class="main-content">
      <BlogList />
      <Footer />
    </div>
  </div>
</template>

<script>
import BlogList from '../../components/BlogOneColumnGrid/BlogList'
import Footer from '../../components/BlogOneColumnGrid/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'Blog',
  components: {
    BlogList,
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
