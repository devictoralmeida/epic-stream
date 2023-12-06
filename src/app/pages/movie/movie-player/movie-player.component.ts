import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-player',
  templateUrl: './movie-player.component.html',
  styleUrl: './movie-player.component.scss',
})
export class MoviePlayerComponent implements OnInit {
  @Input() videoId: string;
  private apiLoaded = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }

    this.route.paramMap.subscribe((params) => {
      const newId = params.get('id');
      this.hideOrShowVideo(newId);
    });
  }

  hideOrShowVideo(newId: string | null): void {
    const videoPlayer = document.getElementById('player');

    if (newId) {
      videoPlayer?.classList.add('hide');
      videoPlayer?.classList.remove('player-full');
    }
  }
}
