import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-learning';

  message: boolean;

  constructor(private data: DataService,
    private _router: Router) {
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
    this._router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this._router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this._router.navigated = false;
        window.scrollTo(0, 0);
      }
    });
  }
}
