import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ReviewController } from './controllers/review.controller';
import { PrismaService } from '../database/prisma/prisma.service';
import { CreateReview } from '@app/usecases/create-review';

@Module({
  imports: [DatabaseModule],
  controllers: [ReviewController],
  providers: [PrismaService, CreateReview],
})
export class HttpModule {}
