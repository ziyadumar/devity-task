import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/core/interfaces/card.interface';

@Component({
  selector: 'app-stats-complete',
  templateUrl: './stats-complete.component.html',
  styleUrls: ['./stats-complete.component.scss']
})
export class StatsCompleteComponent implements OnInit {

  @Input() card: Card;
  constructor() { }

  ngOnInit() {}

}
