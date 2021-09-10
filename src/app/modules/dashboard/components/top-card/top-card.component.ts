import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/interfaces/card.interface';
import { ColorSchema } from 'src/app/core/mocks/color.schema';

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.scss']
})
export class TopCardComponent implements OnInit {

  @Input() card: Card;
  colorCode: string;

  constructor() { }

  colors = ColorSchema;
  ngOnInit(): void {
    // picking color code for the card line when each component is instanciated
    this.colorCode = ColorSchema[this.card?.platform] ?? 'grey'; // from an enum
  }


}
