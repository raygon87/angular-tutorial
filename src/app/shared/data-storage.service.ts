import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from './recipes.model';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { tokenKey } from '@angular/core/src/view';

@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

  
  storeRecipes() {
    // return this.httpClient.put('https://uemy-ng-http-76c43.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
    //   observe: 'body',
    //   params: new HttpParams().set('auth', token)
    // })
    const req = new HttpRequest('PUT', 'https://uemy-ng-http-76c43.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {reportProgress:true});
    return this.httpClient.request(req);
  }

  getRecipes() {
    // this.httpClient.get<Recipe[]>('https://uemy-ng-http-76c43.firebaseio.com/recipes.json?auth=' + token)
    this.httpClient.get<Recipe[]>('https://uemy-ng-http-76c43.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json'
    })
      .map(
        (recipes) => {
          for (let recipe of recipes) {
            if(!recipe['ingredients']) {
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