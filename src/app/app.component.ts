import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movid';

  constructor(private router: Router) {
    this.detectDevTools();
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if ((event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) ||
        (event.key === 'U' && event.ctrlKey)) { 
      event.preventDefault();
      this.showFullScreenMessage();
    }
  }

  @HostListener('document:contextmenu', ['$event'])
  onContextMenu(event: MouseEvent) {
    event.preventDefault();
    this.showFullScreenMessage();
  }

  private showFullScreenMessage() {
    this.router.navigateByUrl('/hihi');
  }

  private detectDevTools() {
    window.addEventListener('devtoolschange', (event) => {
      if (document.documentElement.classList.contains('devtools-open')) {
        this.showFullScreenMessage();
      }
    });
  }
}
