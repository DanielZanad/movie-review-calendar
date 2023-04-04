import { Review } from '../entities/review';

export abstract class ReviewRepository {
  abstract create(review: Review): Promise<Review>;
}
