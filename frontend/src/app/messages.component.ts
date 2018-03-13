import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
})
export class MessagesComponent {
  title = 'my app';

  constructor( private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('MessagesComponent ngOnInit()')
    var userId = this.route.snapshot.params.id
    this.apiService.getMessages(userId);
  }
}
