import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieSearchComponent } from "./movie-search/movie-search.component";
import { MovieInfoComponent } from "./movie-info/movie-info.component";

const routes: Routes = 
[
{ path: "", component: MovieSearchComponent , pathMatch: "full" },
{ path: "app-movie-info", component: MovieInfoComponent },
{ path: "**", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
