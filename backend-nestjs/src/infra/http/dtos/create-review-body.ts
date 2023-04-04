import { IsNotEmpty } from 'class-validator';

export class createReviewBody {
  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  movie_name: string;

  date: string;
}
