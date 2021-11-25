import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data : any;

  constructor(private _http: HttpClient) {
    this._http.get('http://localhost:3000/report')
      .subscribe((res) => {
         this.data = res;
      });
  }
}
