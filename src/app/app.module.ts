import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageBusinessRangeComponent } from './components/page-business-range/page-business-range.component';
import { PageConsultingInfoComponent } from './components/page-consulting-info/page-consulting-info.component';
import { PageBlogComponent } from './components/page-blog/page-blog.component';
import { PageContactUsComponent } from './components/page-contact-us/page-contact-us.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentService } from './services/content.service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'business',
    component: PageBusinessRangeComponent
  },
  {
    path: 'consulting',
    component: PageConsultingInfoComponent
  },
  {
    path: 'blog',
    component: PageBlogComponent
  },
  {
    path: 'contact',
    component: PageContactUsComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PageBusinessRangeComponent,
    PageConsultingInfoComponent,
    PageBlogComponent,
    PageContactUsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  entryComponents: [
    AboutComponent,
    ContactComponent
  ],
  providers: [
    ContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
