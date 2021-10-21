import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  readonly name: string = 'Angular Material';
  version: number = 5;

  onVersionRelease() {
    this.version += 1;
  }
}
