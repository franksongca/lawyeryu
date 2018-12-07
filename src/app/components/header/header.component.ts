import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ContentService } from './../../services/content.service';
import { ModalsService } from './../../services/modals/modals.service';
import { ActivatedRoute, RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'yu-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentLang;
  menuItems;
  menuData;
  constructor(
    private contentService: ContentService,
    private translate: TranslateService,
    private router: Router,
    private modalsService: ModalsService) {
    this.currentLang = ContentService.CurrentLang;

    ContentService.onContentLoaded.subscribe((data) => {
      this.menuData = ContentService.MENU_CONFIG;
      this.updateNavigationMenu();
    });
  }

  updateNavigationMenu() {
    let that = this;
    this.menuItems = [];

    this.menuData.forEach((data) => {
      that.translate.get('Messages.' + data.tag).subscribe((res) => {
        that.menuItems.push({key: data.tag, value: res, route: data.route});
      });
    });
  }

  toggleLanguage() {
    if (this.currentLang === 'zh-cn') {
      this.currentLang = 'en';
    } else {
      this.currentLang = 'zh-cn';
    }
    this.translate.use(this.currentLang);
    ContentService.CurrentLang = this.currentLang;
    this.updateNavigationMenu();
  }

  navigateTo(path) {
    if (path === 'abort') {
      this.modalsService.showSimpleDialog({
        Title: 'TXT_ABOUT_TITLE',
        Body: 'TXT_ABOUT_BODY',
        Buttons: {
          BtnYes: 'TXT_BUTTON_CONFIRM',
          BtnNo: 'TXT_BUTTON_CANCEL',
        },
        Callback: (result) => {
          alert(result);
        }
      });
    } else {
      this.router.navigate(['/' + path]);
    }
  }

  ngOnInit() {
  }

}
