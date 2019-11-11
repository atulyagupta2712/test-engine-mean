import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-studentsoftware',
  templateUrl: './studentsoftware.component.html',
  styleUrls: ['./studentsoftware.component.css']
})
export class StudentsoftwareComponent implements OnInit {

  questions:any;
  questionObject: any;
  score: number=0;
  questionIndex: number=0;
  quesForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { 
    this.questionObject={};
    this.quesForm = new FormGroup({
      option: new FormControl()
    })
  }

  ngOnInit() {

    this.authService.getSoftwareQuestion().subscribe(data=>{
      if(data.success){
        this.questions = data.msg;
        this.questionObject= this.questions[this.questionIndex];
      }
    },
  error=>{
    console.log(error);
  })
  }
  onsoftware(){
    var data = this.quesForm.get('option').value;
    if(data == this.questionObject.correctAnswer){
      this.score++;
    }
    // console.log(this.questionIndex);
    if(this.questionIndex < this.questions.length){
      this.questionIndex++;
      this.questionObject = this.questions[this.questionIndex];
    }
    if(this.questionIndex == this.questions.length){
      this.again();
    }
  }
  again(){
    localStorage.setItem('score', JSON.stringify(this.score));
    localStorage.setItem('length', this.questions.length);
    this.router.navigate(['result']);
  }
}
