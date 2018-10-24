import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent{
  email:string = '';
  firstName:string = '';
  lastName:string = '';
  phoneNumber:string ='';


  constructor(private httpClient: HttpClient) { }
    onClick(){
      console.log("hello");

  }
}
