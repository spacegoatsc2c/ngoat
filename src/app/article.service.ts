import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Article } from './article';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArticleService {

  constructor(private http: Http) { }

  private articleUrl = 'api/articles/';

  publishArticle(article: Article, token: string){
    let headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + token });

    return this.http
               .post(this.articleUrl, JSON.stringify(article), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }

  getArticles(){
    return this.http.get(this.articleUrl)
         .toPromise()
         .then(response => response.json().results as Article[])
         .catch(this.handleError);
  }

  getArticle(id: number){
    return this.http.get(this.articleUrl + id + '/')
         .toPromise()
         .then(response => response.json().results as Article)
         .catch(this.handleError);
  }

  private currentUrl = 'api/current-articles/'

  getCurrent(){
    return this.http.get(this.currentUrl)
         .toPromise()
         .then(response => response.json().results as Article[])
         .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
