import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  movies: any[] = [];
  searchQuery: string = '';
  filteredMovies: any[] = []; 
  isLoading: boolean = false;
  private subscription: Subscription | undefined;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.fetchAllMovies();
  }

  fetchAllMovies() {
    this.isLoading = true;
    const totalPages = 500;
    let fetchedMovies: any[] = [];
    for (let page = 1; page <= totalPages; page++) {
      this.subscription = this.movieService.getNewMovies(page)
        .subscribe({
          next: (data: any) => {
            if (data && data.result.items) {                                                   
              fetchedMovies.push(...data.result.items);
              if (page === totalPages) {
                this.movies = fetchedMovies;
                this.filteredMovies = this.movies;
                this.isLoading = false;
              }
            }
          },
          error: (error) => {
            console.error('Error fetching movies:', error);
            this.isLoading = false;
          }
        });
    }
  }
  

//   nextPage() {
//     this.currentPage++;
//     this.fetchMovies(this.currentPage);
//   }

//   prevPage() {
//     if (this.currentPage > 1) {
//       this.currentPage--;
//       this.fetchMovies(this.currentPage);
//     }
//   }

  searchMovies() {
    if (this.searchQuery.trim() !== '') {
      this.filteredMovies = this.movies.filter(movie => 
        movie.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredMovies = this.movies;
    }
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
