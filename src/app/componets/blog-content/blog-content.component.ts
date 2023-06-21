import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from '../models/blog';


@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.scss']
})
export class BlogContentComponent implements OnInit{
  constructor(private _blogService:BlogService){}
  ngOnInit(): void {
    this.obtenerData();
  }
  obtenerData(){
    this._blogService.getContacto().subscribe(data=>{
      //this.data = data[0];
    },error=>error)
  }

  data: Blog[]=[];
}
