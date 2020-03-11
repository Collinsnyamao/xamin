import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-nine-blog',
  templateUrl: './section-nine-blog.component.html',
})
export class SectionNineBlogComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'BLOG',
    subTitle: 'Recent Blog',
  };
  constructor() { }

  ngOnInit() {
  }

}
