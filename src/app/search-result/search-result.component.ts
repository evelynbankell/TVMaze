import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpsApiService } from '../services/https-api.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit, OnDestroy{

  result: any;
  searchResult: any;
  hasResults: boolean = false;
  subscription: Subscription = new Subscription; 
  
  constructor( 
    private route: ActivatedRoute,
    private httpsApiService: HttpsApiService,
    private router: Router
  ) { }

  
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {

      // TODO: sort on weight
      this.subscription = this.httpsApiService.load(params['searchResult']).subscribe((data: any) => {
        this.searchResult = data;
        if (this.searchResult.length) {
          this.hasResults = true;
        } else {
          this.hasResults = false;
        }
      });
    });
  }

  getShow(item: any): void {
    var id = item.show.id;
    this.router.navigate(["show"], { queryParams: { title: id} });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
