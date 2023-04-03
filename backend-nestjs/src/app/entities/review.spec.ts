import { DateReview } from './date';
import { Review } from './review';

describe('Review', () => {
  it('should be able to create a review', () => {
    const review = new Review({
      movie_name: 'movie_name',
      content: 'content from a review',
      reviewed: true,
      date: new DateReview(new Date()),
    });

    expect(review).toBeTruthy();
  });
});
