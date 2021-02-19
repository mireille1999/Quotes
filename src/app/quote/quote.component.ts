import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, '"Do not settle for less."', 'Mireille', 'Mireille', new Date(2021,2,19), 0, 0),
    new Quote(2, '"Make everyday a little less ordinary."', 'Amanda', 'Amanda', new Date(2021,2,20), 0, 0),
    new Quote(3, '"You did not come this far to only come this far."', 'unknown', 'Benitha', new Date(2020,4,11), 0, 0),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)
      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  
  constructor() { }
  ngOnInit(): void {
  }
}
