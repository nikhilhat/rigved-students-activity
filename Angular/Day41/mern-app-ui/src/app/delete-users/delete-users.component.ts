import { Component, OnInit } from '@angular/core';
import { FakeUserService } from '../fake-user.service';

@Component({
  selector: 'app-delete-users',
  templateUrl: './delete-users.component.html',
  styleUrls: ['./delete-users.component.css']
})
export class DeleteUsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
