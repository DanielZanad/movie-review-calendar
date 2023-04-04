import { DateReview } from '@app/entities/dateReview';
import { Review, ReviewProps } from '@app/entities/review';

type Override = Partial<ReviewProps>;

export function makeReview(override: Override = {}, id?: string) {
  return new Review(
    {
      content: 'movie review content',
      date: new DateReview(new Date()),
      movie_name: 'movie name',
      reviewed: false,
      ...override,
    },
    id,
  );
}
