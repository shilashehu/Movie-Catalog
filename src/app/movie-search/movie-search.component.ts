import { Component, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService } from '../movie.service';
import { IMovie } from '../movie';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})

export class MovieSearchComponent {

  searchQuery: string = "";
  movieList: Observable<Array<IMovie>> = new Observable<Array<IMovie>>();

  constructor(private _movieService: MovieService, private elementRef: ElementRef) {}

  //gets movie list
  searchByTitle() {
    this.movieList = this._movieService.searchMovies(this.searchQuery);
  }

  //sets the background to black
  ngAfterViewInit() {
      this.elementRef.nativeElement.ownerDocument
          .body.style.backgroundColor = 'black';
  }
}
