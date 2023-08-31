import { Component } from '@angular/core';
import { HttpsApiService } from '../services/https-api.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail-show-page',
  templateUrl: './detail-show-page.component.html',
  styleUrls: ['./detail-show-page.component.scss']
})
export class DetailShowPageComponent {
  data: any;
  subscription: Subscription = new Subscription; 
  
  constructor( 
    private route: ActivatedRoute,
    private httpsApiService: HttpsApiService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.queryParams.subscribe((params) => {
      this.httpsApiService.getShow(params['title']).subscribe((data: any) => {
        if(data) {
          this.data = data;
        }
      });
    });
  }

  back(): void {
    this.location.back()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}