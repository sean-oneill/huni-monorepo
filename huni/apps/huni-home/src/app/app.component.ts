import { Component, OnInit } from '@angular/core';
import { API_URL, ApiResponse } from '@huni/api-interface';

@Component({
  selector: 'huni-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  public title: string = 'huni-home';
  public apiResponse: ApiResponse;

  public ngOnInit(): void {
    fetch(API_URL).then((data) => {
      return data.json();
    })
    .then((json: ApiResponse) => {
      this.apiResponse = json;
    }).catch((err) => console.error(err));
  }
}
