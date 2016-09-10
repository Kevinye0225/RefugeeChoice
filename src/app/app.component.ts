import { Component } from '@angular/core';
import { HeaderComponent } from './header'
import { FooterComponent } from './footer'
import { GameComponent } from './game'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    HeaderComponent,
    FooterComponent,
    GameComponent,
  ]
})
export class AppComponent {
  title = 'app works!';
}
