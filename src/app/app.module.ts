import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeekChangerComponent } from './timespan-changer/timespan-changer.component';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentModalComponent } from './appointment-modal/appointment-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AppointmentHeaderComponent } from './appointment-modal/appointment-header/appointment-header.component';
import { PropertyDetailsComponent } from './appointment-modal/property-details/property-details.component';

@NgModule({
  declarations: [
    MainComponent,
    WeekChangerComponent,
    AppointmentModalComponent,
    AppointmentHeaderComponent,
    PropertyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
