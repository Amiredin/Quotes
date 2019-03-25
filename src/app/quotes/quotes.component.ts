import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
 })

 export class QuotesComponent implements OnInit {
  
    
  quotes =[
      
    new Quotes('The grass is greener where you water it.','Doug Hutchison',0,0,new Date(2019,3,5)),
    
    new Quotes('Wherever life plants you, bloom with grace.','Amir cipoe',0,0,new Date(2019,3,5)),

    new Quotes('So, what if, instead of thinking about solving your whole life, you just think about adding additional good things. One at a time. Just let your pile of good things grow',

    'Doug kolin',0,0,new Date(2019,3,6)),

      ]
      addNewQuote(quote){
        // quotes.dateAdded = new Date();
        this.quotes.push(quote);
    
        }

        removeQuote(complete,index){
          if(complete){
            this.quotes.splice(index,1);
            }
        }
        // toogleDetails(index){
        //   this.quotes[index].showDescription = !this.quotes[index].showDescription;
        //   }


        constructor(){}
        ngOnInit() {
        }
      }