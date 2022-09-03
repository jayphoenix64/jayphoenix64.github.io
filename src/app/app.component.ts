import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portfolio';

  public welcome = 'Thanks for clicking the button! But it doesn\'t do anything.';
  public show = false;

  public showWelcomeMessage() {
    if (this.show) {
      this.show = false
    } else {
      this.show = true
    }
  }
}
