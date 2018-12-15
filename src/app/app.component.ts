import { Component, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ContentService } from './services/content.service';
import { ModalsService } from './services/modals/modals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    // const _this = this;
    // setTimeout( () => {
    // }, 10);

  }


  constructor(private translate: TranslateService, private modalsService: ModalsService) {
    translate.setDefaultLang('zh-cn');
    ContentService.CurrentLang = 'zh-cn';
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
