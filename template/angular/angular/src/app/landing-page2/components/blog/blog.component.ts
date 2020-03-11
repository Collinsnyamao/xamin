import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'BLOG',
    subTitle: 'Recent Blog',
  };
  constructor() { }

  ngOnInit() {
  }

}
