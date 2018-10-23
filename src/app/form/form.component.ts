import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

interface MailChimpResponse {
  result: String;
  msg: String;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  submitted: false;
  mailChimpEndpoint = 'https://username.us6.list-manage.com/subscribe/post-json?u=abc123&amp;id=123&';
  error = '';

  constructor(private http: HttpClient) { }


    emailControl = new FormControl ('', [
      Validators.required,
      Validators.email,
    ]);
     nameControl = new FormControl('', [
		Validators.required
	]);

  ngOnInit() {
  }

}
