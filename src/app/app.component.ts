import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'header_onward';

  userData: any = {};

  getData(data: any) {
    console.log(data);
    this.userData = data;
  }
}
