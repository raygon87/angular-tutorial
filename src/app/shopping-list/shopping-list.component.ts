import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', '5'),
    new Ingredient('Tomatoes', '10')
  ];

  constructor() { }

  ngOnInit() {
  }

  // onListAdded(list: {name: string, amount: string}) {
  //   this.ingredients.push({
  //     name: list.name,
  //     amount: list.amount
  //   })
  // }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
