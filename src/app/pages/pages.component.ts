import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Meta} from "../models/meta";


@Component({
  selector: 'app-pages',
  template: `
    <ng-container *ngIf="meta">
      <h3>Pages</h3>
      {{meta | json}}
    </ng-container>
    <router-outlet></router-outlet>
  `
})
export class PagesComponent {
  meta: Meta | null = null;

  constructor(private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.data.subscribe((data: any) => {
      this.meta = data.meta;
    });
  }
}
