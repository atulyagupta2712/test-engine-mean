import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from '../../../services/validate.service';

@Component({
  selector: 'app-tdashboard',
  templateUrl: './tdashboard.component.html',
  styleUrls: ['./tdashboard.component.css']
})
export class TdashboardComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private validateService: ValidateService
  ) { }

  ngOnInit() {
    var data= localStorage.getItem('teacher');
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
    this.router.navigate(['algo']);
  }
  software(){
    this.router.navigate(['software']);
  }
  java(){
    this.router.navigate(['java']);
  }
}
