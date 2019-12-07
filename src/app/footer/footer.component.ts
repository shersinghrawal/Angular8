import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'appFooter',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footervalue : string;
  constructor() {
    this.footervalue="© Copyright 2019. All rights reserved.";
   }

  ngOnInit() {
  }

}
