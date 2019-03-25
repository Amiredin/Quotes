import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

    @Input() quote:Quotes
    @Output() complete = new EventEmitter<boolean>();

    upvote:number=0;
    downvote:number=0;
    upVote(){
      this.upvote++;
    }
    downVote(){
      this.downvote--;
    }
  
   
   
    
    deleteQuote(deleteQ:boolean){
      this.complete.emit(deleteQ);
    }


  constructor() { }

  ngOnInit() {
  }

}
