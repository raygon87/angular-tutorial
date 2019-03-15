import { NotFoundComponent } from './not-found.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class PageNotFoundModule {}