export interface PropertyDetails {
  name: string;
  address: {
    street: string;
    houseNumber: string;
    city: string;
    country: string;
    zipCode: string;
    __typename: string;
  };
  landlord: {
    firstName: string;
    lastName: string;
  };
}
