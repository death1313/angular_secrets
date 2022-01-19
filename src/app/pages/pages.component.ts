import {Component} from "@angular/core";
import {ActivatedRoute, RouteConfigLoadEnd, RouteConfigLoadStart, Router, RouterEvent} from "@angular/router";
import {Meta} from "../models/meta";


@Component({
  selector: 'app-pages',
  template: `


    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

          <li class="nav-item">
            <a class="nav-link" routerLink="/contact">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/faq">FAQ</a>
          </li>

        </ul>
      </div>
    </nav>

    <h1 *ngIf="loading">Loading...</h1>

    <router-outlet></router-outlet>
  `
})
export class PagesComponent {

  loading: boolean = false;

  constructor(private _route: Router) {


    _route.events.subscribe((e) => {
      this.checkRoute(e);
    })
  }

  private checkRoute(e: any) {
    if (e instanceof RouteConfigLoadStart) {
      this.loading = true;
    } else if (e instanceof RouteConfigLoadEnd) {
      this.loading = false;
    }
  }
}
