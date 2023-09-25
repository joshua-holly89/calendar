export type Appointment = {
  id: string;
  date: string;
  maxInviteeCount: number;
  attendeeCount: number;
  showContactInformation: boolean;
  contact: {
    firstName: string;
    name: string;
    email: string;
    mobile: string;
    phone: string;
    address: {};
    fullName: string;
  };
  property: {
    id: string;
    name: string;
    inviteeCount: number;
    address: {
      street: string;
      houseNumber: string;
      city: string;
      country: string;
      zipCode: string;
      __typename: string;
    };
    attachments: [];
    user: {
      profile: {
        firstname: string;
        name: string;
        phone: string;
        gender: string;
        title: string;
      };
      usertype: string;
      __typename: string;
    };
    __typename: string;
  };
  __typename: string;
};
