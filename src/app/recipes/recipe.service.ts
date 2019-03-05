import { EventEmitter } from '@angular/core';
import { Recipe } from './recipes.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test recipe', 'This is simply a test', 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2F11%2F04%2Ffettuccine-olive-oil-ck-x.jpg%3Fitok%3Dbt5Cny7R&w=450&c=sc&poi=face&q=85'),
    new Recipe('Second recipe', 'Another test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyRF0abgBQnEKB6rYjjA_Ti-kknVq7LpNQsc9ekHBkfz_DoFv0')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}