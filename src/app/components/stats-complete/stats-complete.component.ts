import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/core/interfaces/card.interface';
import { ColorSchema } from 'src/app/core/values/color.schema';

@Component({
  selector: 'app-stats-complete',
  templateUrl: './stats-complete.component.html',
  styleUrls: ['./stats-complete.component.scss']
})
export class StatsCompleteComponent implements OnInit {

  @Input() card: Card;
  colorCode: string;

  constructor() { }

  colors = ColorSchema;
  ngOnInit() {
    this.colorCode = ColorSchema[this.card.platform];
    console.log(this.colorCode);
    // const line = document.getElementById('line');
    // line.setAttribute('style', `background-color: ${colorCode}`);
   }

}
