import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent {

  readonly isHandset$: Observable<boolean> =
    this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(result => result.matches),
    );

  constructor(
    private readonly breakpointObserver: BreakpointObserver,
  ) {}
}
