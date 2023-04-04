import { randomUUID } from 'node:crypto';
import { DateReview } from './dateReview';

export interface ReviewProps {
  movie_name: string;
  content: string;
  reviewed: boolean;
  date: DateReview;
}

export class Review {
  private _id: string;
  private props: ReviewProps;

  constructor(props: ReviewProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = props;
  }

  public get id(): string {
    return this._id;
  }

  public set movie_name(movie_name: string) {
    this.props.movie_name = movie_name;
  }

  public get movie_name(): string {
    return this.props.movie_name;
  }

  public set content(content: string) {
    this.props.content = content;
  }

  public get content(): string {
    return this.props.content;
  }

  public set reviewed(reviewed: boolean) {
    this.props.reviewed = reviewed;
  }

  public get reviewed(): boolean {
    return this.props.reviewed;
  }

  public get date(): DateReview {
    return this.props.date;
  }

  public set date(date: DateReview) {
    this.props.date = date;
  }
}
