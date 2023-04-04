import { ReviewRepository } from '@app/repositories/review-repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Review } from '@app/entities/review';
import { PrismaReviewMapper } from '../mappers/prisma.review.mapper';

@Injectable()
export class PrismaReviewRepository implements ReviewRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(review: Review): Promise<Review> {
    const raw = PrismaReviewMapper.toPrisma(review);

    const result = await this.prisma.review.create({
      data: raw,
    });

    return PrismaReviewMapper.toReview(result);
  }
}
