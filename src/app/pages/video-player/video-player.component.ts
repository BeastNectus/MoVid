import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  videoUrl: SafeResourceUrl = '';
  movieTitle: string = '';

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const srcParam = params.get('src') || '';
      const titleParam = params.get('title') || '';

      console.log('Title parameter:', titleParam); 

      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(srcParam);
      this.movieTitle = decodeURIComponent(titleParam);
    });
  }

}
