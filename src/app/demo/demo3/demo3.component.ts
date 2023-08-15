import { Component } from '@angular/core';
import { Book } from 'src/app/shared/models/Book';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component {
  //#region Components
  //ngStyle
  favColor : string = "#7FFF00";
  favColor2 : string = "darkblue";
  tmp : string = "";



  invertColor(favColor : string,favColor2 : string) : void {
   this.favColor = favColor2;
   this.favColor2 = favColor;
   
  }

  //ngClass
  isSmaller : boolean = false;
  isChartreuse : boolean = false;
  isOblique : boolean = false;

  //#endregion

  //#region Structural
  //ngIf
  isWarm : boolean = true;

  //ngFor

  HpList : Book[] = [
    { id : 0, name : 'Harry Potter 1',  avatar : 'assets/images/Hp1.jpg' },

    { id : 1, name : 'Harry Potter 2',  avatar : 'assets/images/Hp2.jpg' },

    { id : 2, name : 'Harry Potter 3', avatar : 'assets/images/Hp3.webp' },

    { id : 3, name : 'Harry Potter 4', avatar : 'assets/images/Hp4.webp' }
  ];

  //ngSwitch
  menu : string|undefined = undefined;

  //#endregion

}
