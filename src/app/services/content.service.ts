import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  static onContentLoaded: EventEmitter<any> = new EventEmitter();
  static onBlogLoaded: EventEmitter<any> = new EventEmitter();
  static HTTP;
  
  static DEFAULT_LANGUAGE;
  static MENU_CONFIG;
  static PAGES;
  static BLOGS;

  static CurrentLang;
  
  constructor(private http: HttpClient) {
    ContentService.HTTP = http;
    
    http.get('./assets/data/content.json').subscribe(
      (response) => {
        ContentService.DEFAULT_LANGUAGE = response['defaultLanguage'];
        ContentService.MENU_CONFIG = response['menu'];
        ContentService.PAGES = response['pages'];
        ContentService.BLOGS = response['blogs'];
        
        ContentService.onContentLoaded.emit();
      }
    );
  }
  
  static loadBlogJson(blogFile) {
    return ContentService.HTTP.get('./assets/documents/blogs/' + blogFile)
  }
}
