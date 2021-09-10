import { Pipe, PipeTransform } from "@angular/core";
import { Detail } from "../interfaces/details.interface";

/* TAG-1 // 'pure' pipe : since it produces no side effects and
 solely rely on the input */
@Pipe({ name: 'summary', pure: true })
export class SummaryPipe implements PipeTransform {
  constructor() { }
  transform(value: Detail) {
    return `You have <b>${value.count}</b> ${value.text}, <u>${value.percentage}%</u>
        ${value.isProgress ? 'increase' :
        'decrease'} compared to yesterday.`;
  }
}
