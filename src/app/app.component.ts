import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dx-demo';


  public customers = [{
    ID: 1,
    CompanyName: "Super Mart of the West",
    City: "Bentonville",
    State: "Arkansas"
}, {
    ID: 2,
    CompanyName: "Electronics Depot",
    City: "Atlanta",
    State: "Georgia"
}];
}
