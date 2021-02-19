import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote: quote;
  @Output() isComplete = new EventEmitter<boolean>();
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  upvote() {
    this.quote.upvote++;
  }
  downvote() {
    this.quote.downvote++;
  }
  constructor() { }
  ngOnInit(): void {
  }
}