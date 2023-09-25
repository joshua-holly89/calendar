import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appointment } from './Appointment';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { DateAndId } from './DateAndId';
import { AppointmentDetails } from './AppointmentDetails';
import { addMinutes } from 'date-fns';
import { NoAppointmentFoundError } from './NoAppointmentFoundError';

@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  private _appointments: Appointment[];
  private appointmentsSubject: ReplaySubject<Appointment[]> = new ReplaySubject(
    1
  );
  constructor(private http: HttpClient) {}

  public fetchAppoinments(): void {
    this.http.get('./assets/data.json').subscribe((data: any) => {
      this._appointments = data.data.appointments.nodes;
      this.sortDatesByDateTime();
      this.appointmentsSubject.next(this._appointments);
    });
  }

  private sortDatesByDateTime(): void {
    this._appointments.sort(
      (appointmentA, appointmentB) =>
        this.parseDateStringToDateObject(appointmentA.date).getTime() -
        this.parseDateStringToDateObject(appointmentB.date).getTime()
    );
  }

  getDatesAndIdsOfAppointments(): Observable<DateAndId[]> {
    return this.appointmentsSubject.pipe(
      map((appointments) =>
        appointments.map((appointment) => {
          return {
            date: this.parseDateStringToDateObject(appointment.date),
            id: appointment.id,
          };
        })
      )
    );
  }

  getAppointmentDetails(id: string): Observable<AppointmentDetails | null> {
    return this.appointmentsSubject.pipe(
      map((appointments) => {
        const appointment = appointments.find(
          (appointment) => appointment.id === id
        );
        if (appointment) {
          return this.composeAppointmentDetails(appointment);
        } else {
          return null;
        }
      })
    );
  }

  cleanseDateFromTimezone(date: Date): Date {
    return addMinutes(date, date.getTimezoneOffset());
  }

  hasNextAppointment(appointmentId: string): boolean {
    return (
      this.findAppointmentIndex(appointmentId) + 1 < this._appointments.length
    );
  }

  hasPreviousAppointment(appointmentId: string): boolean {
    return this.findAppointmentIndex(appointmentId) > 0;
  }

  getNextAppointmentId(appointmentId: string): string {
    const indexOfNextAppointment = this.findAppointmentIndex(appointmentId) + 1;
    if (indexOfNextAppointment >= this._appointments.length) {
      throw new NoAppointmentFoundError('No previous appointment!');
    }
    return this._appointments[indexOfNextAppointment].id;
  }

  getPreviousAppointmentId(appointmentId: string): string {
    const indexOfPreviousAppointment =
      this.findAppointmentIndex(appointmentId) - 1;
    if (indexOfPreviousAppointment < 0) {
      throw new NoAppointmentFoundError('No previous appointment!');
    }
    return this._appointments[indexOfPreviousAppointment].id;
  }

  private findAppointmentIndex(appointmentId: string): number {
    return this._appointments.findIndex(
      (appointment) => appointment.id === appointmentId
    );
  }

  private composeAppointmentDetails(
    appointment: Appointment
  ): AppointmentDetails {
    return {
      date: this.parseDateStringToDateObject(appointment.date),
      property: {
        name: appointment.property.name,
        address: appointment.property.address,
        landlord: {
          firstName: appointment.property.user.profile.firstname,
          lastName: appointment.property.user.profile.name,
        },
      },
      attendees: {
        count: appointment.attendeeCount,
        max: appointment.maxInviteeCount,
      },
    };
  }

  private parseDateStringToDateObject(dateString: string): Date {
    return new Date(dateString);
  }
}
