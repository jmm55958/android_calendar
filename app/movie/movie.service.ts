import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable()
export class MovieService {

    private movies = new Array<Movie>(
        // id: number; name: string; date: string; ;
        {id: 1, name: "Toy Story 3", date: "08/10" },
        {id: 2, name: "Inside Out", date: "08/10" },
        {id: 3, name: "The Prestige", date: "08/17" },
        {id: 4, name: "The Greatest Showman", date: "08/17" },
        {id: 5, name: "Lion King", date: "08/24" },
        {id: 6, name: "Black Panther", date: "08/24" },
        {id: 7, name: "The Post", date: "08/31" },
        {id: 8, name: "Ready Player One", date: "08/31" },
        {id: 9, name: "Spiderman", date: "09/06" },
        {id: 10, name: "Spiderman: Homecoming", date: "09/07" },
        {id: 11, name: "Avergers: Infinity War", date: "09/07" },
        {id: 12, name: "Deadpool", date: "09/13" },
        {id: 13, name: "Jumanji", date: "09/14" },
        {id: 14, name: "Game Night", date: "09/14" },
        {id: 15, name: "I, Tonya", date: "09/21" },
        {id: 16, name: "Deadpool 2", date: "09/21" },
        {id: 17, name: "The Land Before Time", date: "09/28" },
        {id: 18, name: "Jurassic World 2", date: "09/28" },
        {id: 19, name: "Isle of Dogs", date: "10/05" },
        {id: 20, name: "Incredibles 2", date: "10/05" },
        {id: 21, name: "Halloweentown", date: "10/11" },
        {id: 22, name: "Paranormal Activity", date: "10/12" },
        {id: 23, name: "A Quiet Place", date: "10/12" },
        {id: 24, name: "Rocky Horror", date: "10/18" },
        {id: 25, name: "Perks of Being a Wallflower", date: "11/02" },
        {id: 26, name: "Love, Simon", date: "11/02" },
        {id: 27, name: "Blue is the Warmest Color", date: "11/09" },
        {id: 28, name: "Lady Bird", date: "11/09" },
        {id: 29, name: "Florida Project", date: "11/30" },
        {id: 30, name: "Solo", date: "11/30" },
    );

    getItems(): Movie[] {
        return this.movies;
    }
}