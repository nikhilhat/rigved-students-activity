import { Component, OnInit } from '@angular/core';
import { FakeUserService } from '../fake-user.service';

@Component({
  selector: 'app-fake-users',
  templateUrl: './fake-users.component.html',
  styleUrls: ['./fake-users.component.css']
})
export class FakeUsersComponent implements OnInit {
  fakeUsers : any[] | undefined = undefined;
  private _service: any;

  constructor(private_service: FakeUserService) { }

  ngOnInit(): void {
  }

  handleClick(){
    this._service.getFakeUsers().suscribe((data: any[] | undefined)=> {
      this.fakeUsers = data
    });
  }
}
