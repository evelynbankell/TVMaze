import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  searchReslut: any;
  frontPage: boolean = true;
  currentRoute: string = "";
  hasSearchWord: boolean = true;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.frontPage = true;

    //TODO: better solution for when is on start page
    if (this.router.routerState.snapshot.url !== '/') {
      this.frontPage = false;
    }
  }

  searchShow(): void {
    var searchString = ((document.getElementById("searchId") as HTMLInputElement).value);
    if (searchString) {
      this.router.navigate(["results"], { queryParams: { searchResult: searchString} });
      this.frontPage = false;
      this.hasSearchWord = true;
    } else {
      this.frontPage = true;
      this.hasSearchWord = false;
      
    }
    
  }
}
