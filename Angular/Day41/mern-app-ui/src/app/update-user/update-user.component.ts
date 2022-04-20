import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FakeUserService } from '../fake-user.service';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private _service : FakeUserService) { }

  ngOnInit(): void {
  }


  updateData(value: any){
    let body: {
      name: value.name,
      age : Value.age
    }
    this._service.updateData(body. )
  }

}
