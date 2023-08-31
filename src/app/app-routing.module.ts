import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SearchResultComponent } from './search-result/search-result.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FrontPageSearchComponent } from './front-page-search/front-page-search.component';
import { DetailShowPageComponent } from './detail-show-page/detail-show-page.component';


const routes: Routes = [
  { path: '', component: FrontPageSearchComponent },
  { path: 'results', component: SearchResultComponent },
  { path: 'show', component: DetailShowPageComponent }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
