import { DateReview } from './date';

describe('DateReview Value Object', () => {
  it('should be able to create a new DateReview', () => {
    const dateReview = new DateReview(new Date());

    expect(dateReview).toBeTruthy();
    expect(() => new DateReview(new Date())).not.toThrow();
  });

  it('Should not be able to create a new DateReview in the past', () => {
    const yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);

    expect(() => new DateReview(yesterdayDate)).toThrow();
  });
});
