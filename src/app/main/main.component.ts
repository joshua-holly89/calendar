import { Component, OnInit } from '@angular/core';
import {
  CalendarEvent,
  CalendarMonthViewDay,
  CalendarView,
  CalendarWeekViewBeforeRenderEvent
} from 'angular-calendar';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentModalComponent } from '../appointment-modal/appointment-modal.component';
import { AppointmentsService } from '../appointments-service/appointments.service';
import { DateAndId } from '../appointments-service/DateAndId';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public weekViewDate: Date = new Date();
  public monthViewDate: Date = new Date();
  public weekView: CalendarView = CalendarView.Week;
  public monthView: CalendarView = CalendarView.Month;
  public events: CalendarEvent[] = [];
  private selectedDay: CalendarMonthViewDay;

  constructor(
    private appointmentsService: AppointmentsService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.appointmentsService.fetchAppoinments();
    this.appointmentsService
      .getDatesAndIdsOfAppointments()
      .subscribe((datesAndIds: DateAndId[]) =>
        this.processDatesAndIdsOfAppointments(datesAndIds)
      );
  }

  private processDatesAndIdsOfAppointments(datesAndIds: DateAndId[]): void {
    this.generateCalendarEventsFromDates(datesAndIds);
    this.changeViewDate(datesAndIds[0].date);
  }

  private generateCalendarEventsFromDates(datesAndIds: DateAndId[]): void {
    this.events = datesAndIds.map((dateAndId) => {
      return {
        start: this.appointmentsService.cleanseDateFromTimezone(dateAndId.date),
        title: 'Viewing',
        id: dateAndId.id,
      };
    });
  }

  dayInMonthViewClicked(day: CalendarMonthViewDay): void {
    this.jumpToDayInWeekView(day);
    this.markDay(day);
    this.unmarkPreviouslySelectedDay();
    this.selectedDay = day;
  }

  private markDay(day: CalendarMonthViewDay<any>): void {
    day.cssClass = 'cal-day-selected';
  }

  private jumpToDayInWeekView(day: CalendarMonthViewDay<any>): void {
    this.weekViewDate = day.date;
  }

  private unmarkPreviouslySelectedDay(): void {
    if (this.selectedDay != null) {
      delete this.selectedDay.cssClass;
    }
  }

  markWeekDaySelectedInMonthView(event: CalendarWeekViewBeforeRenderEvent): void {
    if (this.selectedDay != null) {
      for (const day of event.header) {
        if (this.weekViewHeaderDayIsSelectedMonthDay(day)) {
          day.cssClass = 'cal-day-selected';
        }
      }
    }
  }

  private weekViewHeaderDayIsSelectedMonthDay(day: any): boolean {
    return this.selectedDay.date.getTime() === day.date.getTime();
  }

  openAppointment({ event }: { event: CalendarEvent }): void {
    this.matDialog.open(AppointmentModalComponent, {
      data: { appointmentId: event.id },
    });
  }

  changeViewDate(newViewDate: Date): void {
    this.weekViewDate = newViewDate;
    this.monthViewDate = newViewDate;
  }
}
