import { Pipe, PipeTransform } from "@angular/core";
import { Detail } from "../interfaces/details.interface";

// TAG-1
@Pipe({ name: 'Summary' })
export class SummaryPipe implements PipeTransform {
  constructor() { }
  transform(value: Detail) {
    return `You have <b>${value.count}</b> ${value.text}, <u>${value.percentage}%</u>
        ${value.isProgress ? 'increase' :
        'decrease'} compared to yesterday.`;
  }
}
