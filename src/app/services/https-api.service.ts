import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HttpsApiService {

    private url: string =  'https://api.tvmaze.com/search/shows?q=';
    private detailedUrl: string =  'https://api.tvmaze.com/shows/';
    searchUrl: string = "";

    constructor(
        private httpClient: HttpClient,
    ) {}

    public load(searchString: string): Observable<any> {
        this.searchUrl = this.url + searchString;
        return this.httpClient.get(this.searchUrl, { headers: { Accept: 'application/json' } });
    }

    public getShow(id: number): Observable<any> {
        this.searchUrl = this.detailedUrl + id + "?embed=cast";
        return this.httpClient.get(this.searchUrl, { headers: { Accept: 'application/json' } });
    }
}
