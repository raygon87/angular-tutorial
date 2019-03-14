import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../shared/recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  constructor(private shoppingListService: ShoppingListService) {}
  
  private recipes: Recipe[] = [
    new Recipe(
      'A Test recipe', 
      'This is simply a test', 
      'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2F11%2F04%2Ffettuccine-olive-oil-ck-x.jpg%3Fitok%3Dbt5Cny7R&w=450&c=sc&poi=face&q=85',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
      new Recipe(
      'Second recipe', 
      'Another test', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyRF0abgBQnEKB6rYjjA_Ti-kknVq7LpNQsc9ekHBkfz_DoFv0',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];
  
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }
  
}