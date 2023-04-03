import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';

@Controller()
export class AppController {
  constructor(private readonly prisma_service: PrismaService) {}

  @Get()
  get_all_reviews() {
    return this.prisma_service.review.findMany();
  }
}
