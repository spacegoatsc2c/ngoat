import { Injectable } from '@angular/core';
import { Article } from './article';
import { ARTICLES } from './mock-articles';

@Injectable()
export class ArticleService {

  constructor() { }

  getArticles(){
      return Promise.resolve(ARTICLES);
  }

}
