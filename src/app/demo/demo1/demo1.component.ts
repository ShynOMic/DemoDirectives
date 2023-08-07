import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component {
  //Property Binding
  prenom : string = 'Aude';
  nom : string = 'Beurive';

  //Attribute Binding
  monImage : string = "https://imgflip.com/s/meme/Cute-Cat.jpg";
  isNotAvailable : boolean = true;

  //Event Binding
  message : string = "...[En attente d'une salutation]...";

  direBonjour(langue : string) : void {
    switch(langue) {
      case 'fr' :
        this.message = "Wesh zalu";
        break;
      case 'en' : 
        this.message = "Hi dude";
        break;
      case 'it' :
        this.message = "Ciao bella";
        break;
      default :
        this.message = "G pa compri";
        break;
    }
  }
}
