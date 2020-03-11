import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-testimonial',
  templateUrl: './our-testimonial.component.html',
})
export class OurTestimonialComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'Testimonials',
    subTitle: 'What Our Clients Say',
  };
  constructor() { }

  ngOnInit() {
  }

}
