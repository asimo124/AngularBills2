import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentDate;
  title = 'bills2';

  onChange(event) {
    console.log('event: ', event.toLocaleString());
  }
}
