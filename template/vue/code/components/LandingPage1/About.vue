<template>
  <div>
    <SectionStyle1>
      <span slot="sectionTitle" class="title-design">About us</span>
      <h2 slot="sectionHeading">
        Focused on Actionable Insights
      </h2>
      <template slot="sectionDescription">
        It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout.
      </template>
      <ul slot="sectionContent" class="iq-list">
        <li v-for="(item,index) of list" :key="index"><i :class="item.icon"> </i><span>{{ item.title }}</span></li>
      </ul>
      <a slot="sectionButton" class="button button-icon" href="#"><span class="btn-effect"> Read More</span> </a>
    </SectionStyle1>
  </div>
</template>

<script>
import SectionStyle1 from '../themes/Sections/SectionStyle1'
export default {
  components: {
    SectionStyle1
  },
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
