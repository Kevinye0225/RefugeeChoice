import { Injectable } from '@angular/core';
import { Choice } from './choice';
import { Option } from './option';

@Injectable()
export class QuestionsService {
  questionsList: Choice[] = [];

  constructor() { 
  	let a: Choice = {
  		id: 1,
  		description: "How are you?",
      options: [
        <Option>{
          id: 1,
          description: "Option 1",
          choiceId: 2
        },
        <Option>{
          id: 2,
          description: "Option 2",
          choiceId: 2
        },
        <Option>{
          id: 3,
          description: "Option 3",
          choiceId: 2
        },
      ],
  		time: 50,
  		imgId: 1
  	}
  	let b: Choice = {
  		id: 2,
  		description: "Question 2",
      options: [
        <Option>{
          id: 4,
          description: "Option 1",
          choiceId: 3
        },
        <Option>{
          id: 5,
          description: "Option 2",
          choiceId: 3
        },
        <Option>{
          id: 6,
          description: "Option 3",
          choiceId: 1
        },
      ],
  		time: 50,
  		imgId: 1
  	}
  	let c: Choice = {
  		id: 3,
  		description: "Question 3",
      options: [
        <Option>{
          id: 7,
          description: "Option 1",
          choiceId: 1
        },
        <Option>{
          id: 8,
          description: "Option 2",
          choiceId: 2
        },
        <Option>{
          id: 9,
          description: "Option 3",
          choiceId: 2
        },
      ],
  		time: 50,
  		imgId: 1
  	}
  	this.questionsList.push(a);	
  	this.questionsList.push(b);	
  	this.questionsList.push(c);	
  }

  getQuestions() {
  	return this.questionsList;
  }

}
