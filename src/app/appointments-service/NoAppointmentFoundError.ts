export class NoAppointmentFoundError extends Error {
  constructor(message: string) {
    super(message);
  }
}
