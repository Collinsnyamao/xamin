import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-seven-service',
  templateUrl: './section-seven-service.component.html',
})
export class SectionSevenServiceComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'OUR SERVICES',
    subTitle: 'What Our Clients Say',
  };
  constructor() { }

  ngOnInit() {
  }

}
