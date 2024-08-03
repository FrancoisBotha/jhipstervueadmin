import { type IBlog } from '@/shared/model/demoapp/blog.model';

export interface IPost {
  id?: number;
  title?: string;
  content?: string;
  date?: Date;
  blog?: IBlog | null;
}

export class Post implements IPost {
  constructor(
    public id?: number,
    public title?: string,
    public content?: string,
    public date?: Date,
    public blog?: IBlog | null,
  ) {}
}
