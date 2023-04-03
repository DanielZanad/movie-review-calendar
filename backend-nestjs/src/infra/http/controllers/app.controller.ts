import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../../database/prisma/prisma.service';

@Controller()
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  getHello() {
    return this.prismaService.review.findMany();
  }
}
