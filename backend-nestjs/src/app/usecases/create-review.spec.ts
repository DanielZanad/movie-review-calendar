import { InMemoryReviewRepository } from '@test/repositories/in-memory-review-repository';
import { CreateReview } from './create-review';
import { makeReview } from '@test/factories/review-factory';

describe('Create review', () => {
  it('should be able to register a review', async () => {
    const reviewRepository = new InMemoryReviewRepository();
    const createReview = new CreateReview(reviewRepository);

    const { newReview } = await createReview.execute(makeReview());

    expect(reviewRepository.reviews).toHaveLength(1);
    expect(reviewRepository.reviews[0]).toEqual(newReview);
  });
});
