import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeastVotedComponent } from './least-voted/least-voted.component';
import { MoreVotedComponent } from './more-voted/more-voted.component';
import { VotePageComponent } from './vote-page/vote-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'votar', pathMatch: 'full' },
  { path: 'votar', component: VotePageComponent },
  { path: 'mais-votados', component: MoreVotedComponent },
  { path: 'menos-votados', component: LeastVotedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
