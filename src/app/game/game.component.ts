import { Component, OnInit } from '@angular/core';
import { QuestionsService } from './questions.service';
import { Choice } from './choice';
import { Option } from './option';

@Component({
  moduleId: module.id,
  selector: 'app-game',
  templateUrl: 'game.component.html',
  styleUrls: ['game.component.css'],
  providers: [QuestionsService]
})
export class GameComponent implements OnInit {
  currentId: number = 0;
  questions: Array<Choice>;
  options: Array<Option>;
  friend: string;
  family: string;

  constructor(_QuestionsService: QuestionsService) { 
    this.questions = _QuestionsService.getQuestions();
  }

  ngOnInit() {
  }

  getCurrentQuestion() {
    return this.questions[this.currentId-1].options;
  }

  nextQuestion(_option: Option) {
  	this.currentId = _option.choiceId;
  	console.log(this.currentId);
  }

  startGame(){
  	this.currentId = 1;
  }

}
