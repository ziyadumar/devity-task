import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/core/interfaces/card.interface';
import { Detail } from 'src/app/core/interfaces/details.interface';

@Component({
  selector: 'app-stats-daily',
  templateUrl: './stats-daily.component.html',
  styleUrls: ['./stats-daily.component.scss']
})
export class StatsDailyComponent implements OnInit {

  @Input() detail: Detail;
  constructor() { }

  ngOnInit() { }

}
