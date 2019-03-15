import { PageNotFoundModule } from './not-found/page-not-found.module';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule,
    PageNotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
