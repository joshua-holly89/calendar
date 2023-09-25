import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { of } from 'rxjs';
import { AppointmentsService } from '../appointments-service/appointments.service';

import { AppointmentModalComponent } from './appointment-modal.component';

describe('AppointmentModalComponent', () => {
  let component: AppointmentModalComponent;
  let fixture: ComponentFixture<AppointmentModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule, HttpClientModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: AppointmentsService, useClass: AppointmentsServiceStub },
      ],
      declarations: [AppointmentModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class AppointmentsServiceStub {
  hasNextAppointment() {
    return true;
  }

  hasPreviousAppointment() {
    return true;
  }

  getAppointmentDetails() {
    return of({
      date: '2019-02-28T11:00:00.000+0000',
      property: {
        name: 'Flat ohne name',
        address: {
          street: 'Lazarettstr.',
          houseNumber: '3',
          city: 'München',
          country: 'DE',
          zipCode: '80636',
          __typename: 'Address',
        },
        landlord: {
          firstName: 'Max',
          lastName: 'Mustermann',
        },
      },
      attendees: {
        count: 1,
        max: 3,
      },
    });
  }
}
