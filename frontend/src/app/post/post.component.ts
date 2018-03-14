import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  postMsg = ''

  ngOnInit() {
  }

  post(){
    console.log('post() ' + this.postMsg)
    this.apiService.postMessage({msg: this.postMsg})
  }
}
