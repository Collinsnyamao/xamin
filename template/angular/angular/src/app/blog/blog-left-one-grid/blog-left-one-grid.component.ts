import { Component, OnInit } from '@angular/core';
import {PluginsService} from "../../xamin/plugins.service";
import { topMenuBarItems } from '../../../constants/menu';
@Component({
  selector: 'app-blog-left-one-grid',
  templateUrl: './blog-left-one-grid.component.html',
})
export class BlogLeftOneGridComponent implements OnInit {

  logoImage = '/assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };
  public navItems: any = topMenuBarItems;

  data : any = {
    title:"Left sidebar grid 1",
    img:"04.png"
  };

  grid : string = "12";

  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

}
