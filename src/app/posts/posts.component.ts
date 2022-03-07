import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public posts = []
  public displayedColumns = ['id','userId', 'title', 'body']
  public dataSource
  constructor(private _postsService: PostsService) { }

  ngOnInit(): void {
    this._postsService.getPost()
      .subscribe(data=>{
        this.posts = data
        this.dataSource = data
      });
  }

}
