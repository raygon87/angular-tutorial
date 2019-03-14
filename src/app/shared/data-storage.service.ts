import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from './recipes.model';
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) {}

  storeRecipes() {
    return this.http.put('https://uemy-ng-http-76c43.firebaseio.com/recipes.json', this.recipeService.getRecipes())
  }

  getRecipes() {
    const token = this.authService.getToken();

    this.http.get('https://uemy-ng-http-76c43.firebaseio.com/recipes.json?auth=' + token)
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if(!recipe['ingredients']) {
              console.log(recipe);
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}