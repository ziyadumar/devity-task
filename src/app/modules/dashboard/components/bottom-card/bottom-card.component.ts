import { Component, Input, OnInit } from '@angular/core';
import { Detail } from 'src/app/shared/interfaces/details.interface';

@Component({
  selector: 'app-bottom-card',
  templateUrl: './bottom-card.component.html',
  styleUrls: ['./bottom-card.component.scss']
})
export class BottomCardComponent implements OnInit {

  @Input() detail: Detail;
  constructor() { }

  ngOnInit() { }

}
