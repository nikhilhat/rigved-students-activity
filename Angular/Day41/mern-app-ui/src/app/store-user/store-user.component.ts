import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FakeUserService } from '../fake-user.service';

@Component({
  selector: 'app-store-user',
  templateUrl: './store-user.component.html',
  styleUrls: ['./store-user.component.css']
})
export class StoreUserComponent implements OnInit {

  constructor() private _service: FakeUserService, private _builder: FormBuilder | undefined { }

ngOnInit(): void {
}
//success response on store
info: any | undefined = undefined;
//create a form that will have 3 form control _id, name, age
userForm: FormGroup = this._builder.group({
  _id: [], name: [], age: []
});
handleSubmit() {
  this._service.storeUser(this.userForm.value).subscribe((data) => {
    this.info = data;
  }, (errors) => {
    console.log(errors?.error?.message);
  })
}

}
function handleSubmit() {
  throw new Error('Function not implemented.');
}

