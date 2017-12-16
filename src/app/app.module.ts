import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VotePageComponent } from './vote-page/vote-page.component';
import { NavigationMenuComponent } from './shared/navigation-menu/navigation-menu.component';
import { MoreVotedComponent } from './more-voted/more-voted.component';
import { AppRoutingModule } from './app-routing.module';
import { LeastVotedComponent } from './least-voted/least-voted.component';


@NgModule({
  declarations: [
    AppComponent,
    VotePageComponent,
    NavigationMenuComponent,
    MoreVotedComponent,
    LeastVotedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
