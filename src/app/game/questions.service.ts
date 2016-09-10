import { Injectable } from '@angular/core';
import { Choice } from './choice';

@Injectable()
export class QuestionsService {
  questionsList: Choice[] = [];

  constructor() { 
  	let a: Choice = {
  		id: 1,
  		description: "how are you",
  		options: ['1', '2', '3'],
  		time: 50,
  		imgId: 1
  	}
  	this.questionsList.push(a);	
  }

  getQuestions(){
  	return this.questionsList;
  }

}
