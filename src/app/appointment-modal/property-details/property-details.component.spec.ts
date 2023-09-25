import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDetailsComponent } from './property-details.component';

describe('PropertyComponent', () => {
  let component: PropertyDetailsComponent;
  let fixture: ComponentFixture<PropertyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertyDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyDetailsComponent);
    component = fixture.componentInstance;
    component.property = {
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
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
