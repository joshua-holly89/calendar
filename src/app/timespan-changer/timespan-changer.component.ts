import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CalendarView } from 'angular-calendar';


@Component({
  selector: 'app-timespan-changer',
  templateUrl: './timespan-changer.component.html',
  styleUrls: ['./timespan-changer.component.scss']
})
export class WeekChangerComponent {
  @Input()
  view: CalendarView;
  @Input()
  viewDate: Date;
  @Output()
  changeViewDate = new EventEmitter<Date>();

  constructor() { }

  viewDateChange(newViewDate: Date){
    this.changeViewDate.emit(newViewDate);
  }

}
