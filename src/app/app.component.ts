import { Component } from '@angular/core';
import { HeaderComponent } from './header'
import { FooterComponent } from './footer'
import { GameComponent } from './game';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    HeaderComponent,
    FooterComponent,
    GameComponent,
    ROUTER_DIRECTIVES
  ]
})
export class AppComponent {
  title = 'app works!';
}
