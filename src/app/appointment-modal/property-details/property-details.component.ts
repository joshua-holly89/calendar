import { Component, Input } from '@angular/core';
import { PropertyDetails } from "src/app/appointments-service/PropertyDetails";

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss'],
})
export class PropertyDetailsComponent {
  @Input()
  property: PropertyDetails;

  constructor() {}
}
