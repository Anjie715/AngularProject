import { Component, OnInit } from '@angular/core';
import {element} from "protractor";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  amount = [];
  result: String;
  checkRecipe(){
    if(this.amount[0] >= 1 && (this.amount[4] >= 1  || this.amount[2] >= 1)){
      this.result = 'U cooked chicken salad!';
    }
    if(this.amount[0] >= 1 && this.amount[3] >= 1){
      this.result = 'U cooked fried chicken!';
    }
    if(this.amount[1] >= 1 && this.amount[3] >= 1){
      this.result = 'U cooked steak!';
    }
    if(this.amount[1] >= 1 && this.amount[2] >= 1 && this.amount[3] >= 1){
      this.result = 'U cooked sirloin tomatoes!';
    }
  }

  resetZero(){
    this.amount = [];
    this.result = '';
  }
  constructor() { }

  ngOnInit() {
  }

}
