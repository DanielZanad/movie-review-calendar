export class DateReview {
  private readonly date: Date;

  public get value(): Date {
    return this.date;
  }

  public validateDate(date: Date): boolean {
    return date >= new Date();
  }

  constructor(date: Date) {
    const isDateValid = this.validateDate(date);

    if (!isDateValid) {
      throw new Error('Date is not valid');
    }

    this.date = date;
  }
}
