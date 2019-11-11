import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-studentjava',
  templateUrl: './studentjava.component.html',
  styleUrls: ['./studentjava.component.css']
})
export class StudentjavaComponent implements OnInit {
  questions: any;
 
  value: any;
  questionIndex: number = 0;
  questionObject:any;
  score:number=0;
  quesForm: FormGroup;
 
  constructor(
    private router: Router,
    private authService: AuthService
  ) { 
    this.questionObject={};
    this.quesForm = new FormGroup({
      option: new FormControl(),
  
   });
  
  }

  ngOnInit() {
    this.authService.getJavaQuestion().subscribe(data=>{
    
      if(data.success){
        this.questions= data.msg;
        this.questionObject = this.questions[this.questionIndex];
       
      }
      
    }, 
    error =>{
      console.log('error is ',error);
      return false;
    }
    )
  }

  onjava(){
    var data = this.quesForm.get('option').value;
    
   if(data== this.questions[this.questionIndex].correctAnswer){
      this.score++;
    }
    if(this.questionIndex < this.questions.length){
      this.questionIndex++;
      this.questionObject = this.questions[this.questionIndex]
    }
    if(this.questionIndex == this.questions.length){
      this.finish();
    }
    this.quesForm = new FormGroup({
      option: new FormControl()
    })
  }
  finish(){
    localStorage.setItem('score', JSON.stringify(this.score));
    localStorage.setItem('length', this.questions.length);
    this.router.navigate(['result']);
  }
}