import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component {
  fullname : string = 'Aude beurive';

  birthdate : Date = new Date(1989, 9, 16);

  price : number = 10.14578954;

  celciusTemp : number = 16;
}
