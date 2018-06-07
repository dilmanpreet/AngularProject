import { Component, OnInit } from '@angular/core';
import {ingredient} from "../ingredient.class";
import { RmsService } from '../rms/rms.service';

@Component({
  selector: 'app-shoppinglist-comp',
  templateUrl: './shoppinglist-comp.component.html',
  styleUrls: ['./shoppinglist-comp.component.css']
})
export class ShoppinglistCompComponent implements OnInit {

  public service = new RmsService();

  constructor(service : RmsService) {
    this.service = service;
  }

  ngOnInit() {
  }

}
