import { Component, OnInit } from '@angular/core';

import { Movie } from "./movie";
import { MovieService } from "./movie.service";

@Component({
    selector: 'ns-movie',
    moduleId: module.id,
    templateUrl: 'movie.component.html',
    styleUrls: ["./movie.component.css"]
})

export class MovieComponent implements OnInit {
    movies: Movie[];

    constructor(private movieService: MovieService) { }

    ngOnInit(): void {
        this.movies = this.movieService.getItems();
    }
}