import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'movid';

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if ((event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) ||
        (event.key === 'U' && event.ctrlKey)) { 
      event.preventDefault();
      alert("I'm watching you 👁️👁️");
      debugger;
    }
  }
}
