import { Component, OnInit } from '@angular/core';
import { Formulaire } from './formulaire';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

 model : Formulaire = new Formulaire();

onSubmit(){
console.log(this.model)
}

  constructor() { }

  ngOnInit(): void {
  }

}
