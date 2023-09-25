import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  AppointmentDetails,
} from '../appointments-service/AppointmentDetails';
import { Attendees } from "../appointments-service/Attendees";
import { PropertyDetails } from "../appointments-service/PropertyDetails";
import { AppointmentsService } from '../appointments-service/appointments.service';

@Component({
  selector: 'app-appointment-modal',
  templateUrl: './appointment-modal.component.html',
  styleUrls: ['./appointment-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppointmentModalComponent implements OnInit {
  public dateTime: Date;
  public property: PropertyDetails;
  public attendees: Attendees;
  private appointmentId: string;

  constructor(
    private matDialog: MatDialog,
    private appointmentsService: AppointmentsService,
    @Inject(MAT_DIALOG_DATA) data: { appointmentId: string }
  ) {
    this.appointmentId = data.appointmentId;
  }

  ngOnInit(): void {
    this.fetchAppointment();
  }

  private fetchAppointment() {
    this.appointmentsService
      .getAppointmentDetails(this.appointmentId)
      .subscribe((appointmentDetails: AppointmentDetails | null) =>
        this.processNewAppointmentDetails(appointmentDetails)
      );
  }

  private processNewAppointmentDetails(
    appointmentDetails: AppointmentDetails | null
  ) {
    if (appointmentDetails == null) {
      alert('Chosen event could not be found!');
    } else {
      this.dateTime = this.appointmentsService.cleanseDateFromTimezone(
        appointmentDetails.date
      );
      this.property = appointmentDetails.property;
      this.attendees = appointmentDetails.attendees;
    }
  }

  close() {
    this.matDialog.closeAll();
  }

  goToNextAppointment() {
    this.appointmentId = this.appointmentsService.getNextAppointmentId(
      this.appointmentId
    );
    this.fetchAppointment();
  }

  goToPreviousAppointment() {
    this.appointmentId = this.appointmentsService.getPreviousAppointmentId(
      this.appointmentId
    );
    this.fetchAppointment();
  }

  hasNextAppointment() {
    return this.appointmentsService.hasNextAppointment(this.appointmentId);
  }

  hasPreviousAppointment() {
    return this.appointmentsService.hasPreviousAppointment(this.appointmentId);
  }
}
