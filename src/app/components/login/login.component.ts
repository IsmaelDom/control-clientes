import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;

  constructor(private router: Router,
              private flashMessages: FlashMessagesService) { }

  ngOnInit(): void {
  }

  login(){

  }

}
