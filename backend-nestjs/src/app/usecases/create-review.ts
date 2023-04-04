import { DateReview } from '@app/entities/dateReview';
import { Review } from '@app/entities/review';
import { ReviewRepository } from '@app/repositories/review-repository';
import { Injectable } from '@nestjs/common';

interface CreateReviewRequest {
  movie_name: string;
  content: string;
  reviewed: boolean;
  date: DateReview;
}

interface CreateReviewResponse {
  newReview: Review;
}

@Injectable()
export class CreateReview {
  constructor(private reviewRepository: ReviewRepository) {}

  async execute(request: CreateReviewRequest): Promise<CreateReviewResponse> {
    const { content, date, movie_name, reviewed } = request;

    const review = new Review({
      content,
      date,
      movie_name,
      reviewed,
    });

    const newReview = await this.reviewRepository.create(review);

    return { newReview };
  }
}
