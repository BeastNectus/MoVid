import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'movid';

  private windowHeight: number;

  constructor() {
    this.windowHeight = window.innerHeight;
  }

  @HostListener('contextmenu', ['$event'])
  onContextMenu(event: MouseEvent) {
    if (window.innerHeight < this.windowHeight) {
      alert('Developer tools are disabled.');
      debugger;
    }
  }
}
