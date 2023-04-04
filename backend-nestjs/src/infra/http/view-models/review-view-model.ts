import { Review } from '@app/entities/review';

export class ReviewViewModel {
  static toHTTP(review: Review) {
    return {
      id: review.id,
      content: review.content,
      movie_name: review.movie_name,
      date: review.date.value,
    };
  }
}
