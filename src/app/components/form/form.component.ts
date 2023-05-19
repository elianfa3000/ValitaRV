import { Component } from '@angular/core';
import { form1 } from "../services/form";
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  public form: form1;

  constructor(){
    this.form = new form1("","","",undefined,"","","");
  }

  onSubmit(datos:any){

    console.log(datos.form.value);
    console.log(this.form)
  }

  ngOnInit() {

  }

}

