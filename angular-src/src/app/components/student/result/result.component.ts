import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  isValid=false;
  result: any;
  score: any;
  data: any;
  constructor(
    private router: Router,
    private authService : AuthService
  ) { }

  ngOnInit() {
    if(localStorage.getItem('score')){
      this.score= localStorage.getItem('score');
      this.data = localStorage.getItem('length');
      this.result = ((this.score/this.data)*100).toFixed(2);
      this.isValid= true;
    }
 
  
  }

  again(){
    this.router.navigate(['dashboard']);
    localStorage.removeItem('score');
    localStorage.removeItem('length');
  }

  onlogout(){
    this.authService.onLogout();
    alert('You are logged out');
    this.router.navigate(['/']);
    return false;
  }

}
