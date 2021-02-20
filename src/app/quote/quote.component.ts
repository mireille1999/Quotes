import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, '"Aspire to inspire before we expire."', 'Mireille Mathew', 'Mimi', new Date(2021,2,19), 0, 0),
    new Quote(2, '"Every moment is a fresh beginning."', 'Amanda', 'Unknown', new Date(2021,2,20), 0, 0),
    new Quote(3, '"If you can dream it, you can do it."', ' Walt Disney', 'Disney', new Date(2021,1,1), 0, 0),
  ];
  toggleDetails(index : any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete : any, index : any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)
      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote: any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  
  constructor() { }
  ngOnInit(): void {
  }
}
