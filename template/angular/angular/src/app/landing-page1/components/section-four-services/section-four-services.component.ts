import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-four-services',
  templateUrl: './section-four-services.component.html'
})
export class SectionFourServicesComponent implements OnInit {


  titleSectionProp: any = {
    class: 'text-center',
    title: 'our Services',
    subTitle: 'Explore Our Data Services'
  };

  navList: any[] = [
    {
      id: 'tab-big-data',
      title: 'Big Data',
      img: '03.png',
      active: true,
      chkList1: ['Advance Advisory Team', 'Simply dummy text of the'],
      chkList2: ['Professional Consulting Services', 'It is a long established fact.'],
      chkList3: ['24/7 Support Help Center', 'will be distracted by the of readable']
    },
    {
      id: 'tab-machine-learning',
      title: 'Machine Learning',
      img: '02.png',
      chkList: ['Advance Advisory Team', 'Simply dummy text of the', 'Simply dummy text of the', 'Advance Advisory Team'],
    },
    {
      id: 'tab-analytical-ai',
      title: 'Analytical AI',
      img: '01.png',
      chkList1: ['Advance Advisory Team', 'Simply dummy text of the'],
      chkList2: ['Professional Consulting Services', 'It is a long established fact.'],
      chkList3: ['24/7 Support Help Center', 'will be distracted by the of readable']
    },
    {
      id: 'tab-computer-vision',
      title: 'Computer Vision',
      img: '04.png',
      chkList: ['Advance Advisory Team', 'Simply dummy text of the', 'Simply dummy text of the', 'Advance Advisory Team'],
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
