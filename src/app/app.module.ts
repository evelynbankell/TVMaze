import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpsApiService } from './services/https-api.service';
import { SearchResultComponent } from './search-result/search-result.component';
import { AppRoutingModule } from './app-routing.module';
import { FrontPageSearchComponent } from './front-page-search/front-page-search.component';
import { DetailShowPageComponent } from './detail-show-page/detail-show-page.component';
import { ShowScoreComponent } from './show-score/show-score.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    SearchResultComponent,
    FrontPageSearchComponent,
    DetailShowPageComponent,
    ShowScoreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HttpsApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
