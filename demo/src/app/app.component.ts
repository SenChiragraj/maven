import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { Post } from './models/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  // title = 'demo';
  // error : string = '';
  // posts:Post[] = [];

  // constructor(private service: ServiceService){}

  // ngOnInit(): void {
  //   this.service.getApiData().subscribe(
  //     (data) => {
  //       this.posts = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching posts', error);
  //       this.error = 'Error fetching posts';  
  //     }
  //   );
  // }
}
