import { Component, OnInit } from '@angular/core';
import{NavComponent}from '../nav/nav.component';
import{NavService}from '../nav.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
title='Recipes';
decription='wellcome to recipes site';
//fullImagePath:String;
  constructor(public NavService:NavService) {
    //this.fullImagePath='./S.jpg'
   }

  ngOnInit() {
  }

}
