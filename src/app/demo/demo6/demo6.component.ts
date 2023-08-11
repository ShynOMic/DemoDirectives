import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.scss']
})
export class Demo6Component {

  registerForm : FormGroup;

  // FormBuilder -> Classe Angular qui permet de créer des formulaires complexes
  constructor(private _fb : FormBuilder) {
    this.registerForm = this._fb.group({
      //On définit tous les controls présents dans le group
      //nomControl : [value, [validateurs synchrones] , [validateurs asynchrones]]
      lastname : [null, [Validators.required, Validators.maxLength(100), Validators.pattern(/^[\D]*$/)] , []],
      firstname : [null, [Validators.required, Validators.maxLength(100), Validators.pattern(/^[\D]*$/)]],
      birthdate : [null],
      email : [null, [Validators.required, Validators.email]],
      password : [null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]],
      gender : [null],
      single : [false, [Validators.required]],
      nationality : ['', [Validators.required]]
    })
  }

  createUser() {
    if(this.registerForm.valid) {
      console.log(this.registerForm.value);
      console.log("FORMULAIRE VALIDE 🥳");

      
    }
    else {
      this.registerForm.markAllAsTouched();
      console.log("FORMULAIRE INVALIDE 🤡");      
    }
  }
}
