import { Component } from '@angular/core'

@Component({
  selector: 'practice',
  template: `
  SELECT * FROM aTable WHERE
  <span *ngIf="condition.selected">
  WHERE {{condition.selected.value}}</span>
  `
})
export class PracticeComponent{

}