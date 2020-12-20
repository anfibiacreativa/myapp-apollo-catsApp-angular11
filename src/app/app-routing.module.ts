import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatTeaserComponent } from '../commons/components/cat-teaser/cat-teaser.component';
import { NewCatComponent } from '../commons/components/new-cat/new-cat.component';

const routes: Routes = [
  {
    path: 'astronaut-cats',
    component: CatTeaserComponent
  },
  {
    path: 'new-cat',
    component: NewCatComponent
  },
  {
    path: '',
    redirectTo: 'astronaut-cats',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
