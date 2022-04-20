import { Component, OnInit } from '@angular/core';
import { FakeUserService } from '../fake-user.service';

@Component({
  selector: 'app-find-allusers',
  templateUrl: './find-allusers.component.html',
  styleUrls: ['./find-allusers.component.css']
})
export class FindAllusersComponent implements OnInit {
  users: any[] | undefined = undefined;
  private _service: any;

  constructor(private_service : FakeUserService) {}


  ngOnInit(): void {
  }
  handleClick() : void{
    this._service.getUsers().suscribe((data) => {
      this.users = data;
    });
  }
}
