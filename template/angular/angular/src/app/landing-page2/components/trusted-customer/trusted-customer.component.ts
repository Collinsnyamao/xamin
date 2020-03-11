import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trusted-customer',
  templateUrl: './trusted-customer.component.html',
})
export class TrustedCustomerComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'TRUSTED',
    subTitle: 'Our Customers Get Results',
    description: ''
  };

  hover : boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
