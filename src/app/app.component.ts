import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(private _http: HttpClient) {
    this._http.get('http://localhost:3000/users')
      .subscribe(() => {

      });
  }
}
