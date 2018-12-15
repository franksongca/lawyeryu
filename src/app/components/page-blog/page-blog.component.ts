import { Component, OnInit } from '@angular/core';
import { ContentService } from './../../services/content.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'yu-page-blog',
  templateUrl: './page-blog.component.html',
  styleUrls: ['./page-blog.component.scss']
})
export class PageBlogComponent implements OnInit {
  blogs;
  blog;
  selectBlog = 0;
  status = false;

  constructor(private domSanitizer: DomSanitizer) {
    ContentService.onContentLoaded.subscribe((data) => {
      this.blogs = ContentService.BLOGS;
      this.loadBlog(0);
    });

    if (ContentService.BLOGS) {
      this.blogs = ContentService.BLOGS;
      this.loadBlog(0);
    }
  }

  loadBlog(n) {
    this.selectBlog = n;
    ContentService.loadBlogJson(this.blogs[n].file).subscribe((res) => {
      this.blog = {
        title: this.domSanitizer.bypassSecurityTrustHtml(this.blogs[n].title),
        comments: this.domSanitizer.bypassSecurityTrustHtml(this.blogs[n].comments),
        paragraphs: []
      };

      res.forEach(section => {
        const lines = [];

        section.paragraphs.forEach(paragraph => {
          lines.push(this.domSanitizer.bypassSecurityTrustHtml(paragraph))
        });

        this.blog.paragraphs.push({
          title: this.domSanitizer.bypassSecurityTrustHtml(section.title),
          lines: lines
        });

        this.status = false;
      });
    });
  }


  toggleLogMenu() {
    this.status = !this.status;
  }

  ngOnInit() {
  }

}
