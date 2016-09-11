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
  title = 'Liberty in North Korea';
  description = [
    'The North Korean people are living unimaginable realities every day.',
    'Take a walk in their shoes and then take action for change.'
  ];
}
