import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VotePageComponent } from './vote-page/vote-page.component';
import { NavigationMenuComponent } from './shared/navigation-menu/navigation-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    VotePageComponent,
    NavigationMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
