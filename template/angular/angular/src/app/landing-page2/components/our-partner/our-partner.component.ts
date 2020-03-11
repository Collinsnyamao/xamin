import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-partner',
  templateUrl: './our-partner.component.html',
})
export class OurPartnerComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'OUR PARTNERS',
    subTitle: 'We Partner With Amazing Brands',
  };

  hover : boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
