import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { ReviewRepository } from '@app/repositories/review-repository';
import { PrismaReviewRepository } from './prisma/repositories/prisma-review-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: ReviewRepository,
      useClass: PrismaReviewRepository,
    },
  ],
  exports: [ReviewRepository],
})
export class DatabaseModule {}
