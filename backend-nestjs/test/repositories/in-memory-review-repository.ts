import { Review } from '@app/entities/review';
import { ReviewRepository } from '@app/repositories/review-repository';

export class InMemoryReviewRepository implements ReviewRepository {
  public reviews: Review[] = [];

  async create(review: Review): Promise<Review> {
    this.reviews.push(review);
    return this.reviews[0];
  }
}
