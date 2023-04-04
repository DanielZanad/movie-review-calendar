import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AppController } from './controllers/app.controller';
import { PrismaService } from '../database/prisma/prisma.service';
import { CreateReview } from '@app/usecases/create-review';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [PrismaService, CreateReview],
})
export class HttpModule {}
