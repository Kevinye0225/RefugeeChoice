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
  currentId: number = 1;
  questions: Array<Choice>;
  options: Array<Option>;

  constructor(_QuestionsService: QuestionsService) { 
    this.questions = _QuestionsService.getQuestions();
    // this.options = this.questions[0].options;
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

}
