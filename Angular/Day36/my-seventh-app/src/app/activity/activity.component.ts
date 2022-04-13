import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
  }
  profile: FormGroup = this.builder.group({
    firstname: [''],
    lastname: ['']
  });
  address: FormGroup = this.builder.group({
    state: [''],
    city: [''],
    pin: ['']
  });

  handleSubmit() {
    console.log(this.profile.value);
    console.log(this.address.value);
    this.profile.reset({});
    this.address.reset({});
  }

}
