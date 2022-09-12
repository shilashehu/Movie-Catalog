import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { IMovie, IMovieInfo } from './movie';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _url: string = "http://www.omdbapi.com/?apikey=" + environment.apiKey;

  constructor(private http: HttpClient) { }

  //get list of movies by title 
  searchMovies(searchQuery: string): Observable<Array<IMovie>> {
    return this.http.get(this._url + "&s=" + searchQuery)
    .pipe(        
      map((response: any) => response.Search)
        );
  }

  //search a specific movie by imdbId (unique)
  getMovieInfo(imdbId: string): Observable<IMovieInfo> {
    return this.http.get(this._url + "&i=" + imdbId + "&plot=short");
  }
  
}

