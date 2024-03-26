import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: any[] = [];
  currentPage: number = 1;
  searchQuery: string = '';
  private subscription: Subscription | undefined;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.fetchMovies(this.currentPage);
  }

  fetchMovies(page: number) {
    this.subscription = this.movieService.getNewMovies(page)
      .subscribe({
        next: (data: any) => {
          if (data && data.result.items) {                                                   
            this.movies = data.result.items;
          } else {
            this.movies = []; 
          }
        },
        error: (error) => {
          console.error('Error fetching movies:', error);
        }
      });
  }

  nextPage() {
    this.currentPage++;
    this.fetchMovies(this.currentPage);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchMovies(this.currentPage);
    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
