import { Review as ReviewRaw } from '@prisma/client';
import { Review } from '@app/entities/review';
import { DateReview } from '@app/entities/dateReview';

export class PrismaReviewMapper {
  static toPrisma(review: Review) {
    return {
      id: review.id,
      content: review.content,
      movie_name: review.movie_name,
      reviewed: review.reviewed,
      date: review.date.value,
    };
  }

  static toReview(raw: ReviewRaw) {
    return new Review(
      {
        content: raw.content,
        date: new DateReview(raw.date),
        movie_name: raw.movie_name,
        reviewed: raw.reviewed,
      },
      raw.id,
    );
  }
}
