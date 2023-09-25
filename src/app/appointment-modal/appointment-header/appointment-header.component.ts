import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-appointment-header',
  templateUrl: './appointment-header.component.html',
  styleUrls: ['./appointment-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppointmentHeaderComponent {
  @Input()
  dateTime: Date;
  @Input()
  hasPreviousAppointment: boolean;
  @Input()
  hasNextAppointment: boolean;
  @Output()
  goToNextAppointment: EventEmitter<void> = new EventEmitter();
  @Output()
  goToPreviousAppointment: EventEmitter<void> = new EventEmitter();

  constructor() {}

  getDate() {
    return this.dateTime.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  getTime() {
    return this.dateTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  }
}
