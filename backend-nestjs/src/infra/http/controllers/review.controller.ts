import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';
import { createReviewBody } from '../dtos/create-review-body';
import { CreateReview } from '@app/usecases/create-review';
import { DateReview } from '@app/entities/dateReview';
import { ReviewViewModel } from '../view-models/review-view-model';
import { log } from 'console';

@Controller('review')
export class ReviewController {
  constructor(
    private readonly prisma_service: PrismaService,
    private readonly createReview: CreateReview,
  ) {}

  @Get('list')
  getAllReviews() {
    return this.prisma_service.review.findMany();
  }

  @Post('create')
  async create(@Body() body: createReviewBody) {
    const { content, movie_name } = body;
    const date = new Date(body.date);

    try {
      const { newReview } = await this.createReview.execute({
        content,
        date: new DateReview(date),
        movie_name,
        reviewed: false,
      });

      return {
        review: ReviewViewModel.toHTTP(newReview),
      };
    } catch (error) {
      console.log(error);

      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          error: error.message,
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
        {
          cause: error,
        },
      );
    }
  }
}
