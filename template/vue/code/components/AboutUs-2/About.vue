<template>
  <section class="bg-gray">
    <div class="container">
      <div class="row iq-how-it-works">
        <div class="fadeInUp   col-sm-12 col-lg-6 col-md-6 wow align-items-center">
          <div class="title-box wow fadeInUp text-left">
            <span class="title-design">About us</span>
            <h2>Human Behaviour, Data Science</h2>
            <p> It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout. </p>
          </div>
          <div class="text-left">
            <ul class="iq-list">
              <li v-for="(item,index) of list" :key="index"><i :class="item.icon"> </i><span>{{ item.title }}</span></li>
            </ul>
          </div>
        </div>
        <div class="fadeInUp col-sm-12 col-lg-6 col-md-6 wow"> <img alt="" class="single_image-img attachment-full" height="954"  :src="require('../../assets/images/about-us/03.png')" width="1260" /> </div>
      </div>
      <div class="row iq-how-it-works pt-5">
        <div class="fadeInUp col-sm-12 col-lg-6 col-md-6 wow"> <img alt="" class="single_image-img attachment-full" height="954"  :src="require('../../assets/images/about-us/05.png')" width="1260" /> </div>
        <div class=" fadeInUp  col-sm-12 col-lg-6 col-md-6 wow align-items-center">
          <div class="title-box wow fadeInUp text-left">
            <span class="title-design">About us</span>
            <h2>Human Behaviour, Data Science</h2>
            <p> It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout. </p>
          </div>
          <div class="text-left">
            <ul class="iq-list">
              <li v-for="(item,index) of list" :key="index"><i :class="item.icon"> </i><span>{{ item.title }}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About1',
  data () {
    return {
      list: [
        {
          icon: 'fas fa-check-square',
          title: 'Advance Advisory Team'
        },
        {
          icon: 'fas fa-check-square',
          title: 'Professional Consulting Services'
        },
        {
          icon: 'fas fa-check-square',
          title: '24/7 Support Help Center'
        },
        {
          icon: 'fas fa-check-square',
          title: 'Customer Service & Operations'
        }
      ]
    }
  }
}
</script>
