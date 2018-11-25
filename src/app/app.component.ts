import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ContentService } from './services/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user = {
    name: 'Arthur',
    age: 42
  };

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('zh-cn');
    ContentService.CurrentLang = 'zh-cn';
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
