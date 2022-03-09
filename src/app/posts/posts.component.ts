import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { PostsService } from '../posts.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public posts = []
  public displayedColumns = ['id','userId', 'title', 'body']
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private _postsService: PostsService) {
    
   }


  ngOnInit(): void {
    this._postsService.getPost()
      .subscribe(data=>{
        this.posts = data
        this.dataSource.data = data
        this.dataSource.paginator = this.paginator;

      });
  }


}