import { Component, OnInit, ElementRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, switchMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { MovieService } from "../movie.service";
import { IMovieInfo } from "../movie";

@Component({
  selector: "app-movie-info",
  templateUrl: "./movie-info.component.html",
  styleUrls: ["./movie-info.component.css"]
})

export class MovieInfoComponent implements OnInit {

  movieInfo: Observable<IMovieInfo>;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _movieService: MovieService,
    private elementRef: ElementRef
  ) {}

  //gets movie details 
  ngOnInit() {
    this.movieInfo = this._route.queryParams.pipe(
      map(queryParams => queryParams["movieId"]),
      switchMap(imdbId => this._movieService.getMovieInfo(imdbId))
    );
  }

  
  //sets the background to black
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = 'black';
}
}

