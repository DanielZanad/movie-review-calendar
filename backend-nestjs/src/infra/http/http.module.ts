import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AppController } from './controllers/app.controller';
import { PrismaService } from '../database/prisma/prisma.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [PrismaService]
})
export class HttpModule {}
