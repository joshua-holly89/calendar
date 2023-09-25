import { Attendees } from "./Attendees";
import { PropertyDetails } from "./PropertyDetails";

export interface AppointmentDetails {
  date: Date;
  property: PropertyDetails;
  attendees: Attendees;
}
