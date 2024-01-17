import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ArticleController } from './article/article.controller';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello(): { message: string } {
    const message = this.appService.getHello();

    return { message: message };
  }
}
