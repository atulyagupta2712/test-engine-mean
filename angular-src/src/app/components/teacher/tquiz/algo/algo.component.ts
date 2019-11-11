import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';
import { ValidateService } from '../../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';



@Component({
  selector: 'app-algo',
  templateUrl: './algo.component.html',
  styleUrls: ['./algo.component.css']
})
export class AlgoComponent implements OnInit {
  questionName: String;
  option1: String;
  option2: String;
  option3: String;
  option4: String;
  correctAnswer: String;


  constructor(
    private authService: AuthService,
    private router : Router,
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {

  }
  onalgo(){
    const question = {
    questionName: this.questionName,
    option1: this.option1,
    option2: this.option2,
    option3: this.option3,
    option4: this.option4,
    correctAnswer: this.correctAnswer

    }

    if(!this.validateService.validateQuestion(question)){
      this.flashMessage.show("Please fill in all the fields!", {cssClass: 'alert-danger', timeout: 3000});
    }
    else{
      if(!this.validateService.validateAnswer(question)){
        this.flashMessage.show("Correct Answer does not match with any of the options!", {cssClass: 'alert-danger', timeout: 3000});
      }
      else{
        this.authService.addAlgoQuestion(question).subscribe(data=>{
          
          if(data.success){
            this.flashMessage.show("Question successfully added!", {cssClass: 'alert-success'});
            this.questionName = " ";
            this.option1= " ";
            this.option2 = " ";
            this.option3= " ";
            this.option4= " ";
            this.correctAnswer= " ";  
          }
          else{
            this.flashMessage.show(data.msg, {cssClass: 'alert-danger'});
          }
          
        })
      }
    }
    
  }
  end(){
    this.router.navigate(['tdashboard']);
  }

}
