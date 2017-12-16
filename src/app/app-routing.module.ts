import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VotePageComponent } from './vote-page/vote-page.component';
import { MoreVotedComponent } from './more-voted/more-voted.component';

const routes: Routes = [
  { path: '', redirectTo: 'votar', pathMatch: 'full' },
  { path: 'votar', component: VotePageComponent },
  { path: 'mais-votados', component: MoreVotedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
