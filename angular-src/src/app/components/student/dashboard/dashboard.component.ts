import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../../services/validate.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private validateService: ValidateService
  ) { }

  ngOnInit() {
   var data= localStorage.getItem('user');
   var object = JSON.parse(data);
  //  console.log(object.name);
  document.querySelector('#name').innerHTML = object.name;
  }
  onLogoutClick(){
    this.authService.onLogout();
    alert('You are logged out');
    this.router.navigate(['/']);
    return false;
  }

  algo(){
    this.router.navigate(['studentalgo']);
    console.log('algo');
  }

  software(){
    this.router.navigate(['studentsoftware']);
  }

  java(){
    this.router.navigate(['studentjava']);
  }
}
