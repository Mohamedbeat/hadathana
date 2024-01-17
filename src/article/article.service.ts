import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticleService {
  create(createArticleDto: CreateArticleDto) {
    return 'This action adds a new article';
  }

  findAll() {
    return [
      {
        title: 'عنوان المقال',
        date: '01/01/2024',
        content:
          'محتوى المقال محتوى المقال محتوى المقال محتوى المقال محتوى المقال',
        tags: ['موضوع1', 'موضوع2'],
      },
      {
        title: 'عنوان المقال',
        date: '01/01/2024',
        content:
          'محتوى المقال محتوى المقال محتوى المقال محتوى المقال محتوى المقال',
        tags: ['موضوع1', 'موضوع2'],
      },
      {
        title: 'عنوان المقال',
        date: '01/01/2024',
        content:
          'محتوى المقال محتوى المقال محتوى المقال محتوى المقال محتوى المقال',
        tags: ['موضوع1', 'موضوع2'],
      },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
