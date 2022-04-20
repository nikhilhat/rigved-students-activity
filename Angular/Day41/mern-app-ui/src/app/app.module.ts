import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FakeUsersComponent } from './fake-users/fake-users.component';
import { HttpClientModule} from '@angular/common/http';
import { DeleteUsersComponent } from './delete-users/delete-users.component';
import { FindAllusersComponent } from './find-allusers/find-allusers.component';
import { FindOneuserComponent } from './find-oneuser/find-oneuser.component';
import { StoreUserComponent } from './store-user/store-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    FakeUsersComponent,
    DeleteUsersComponent,
    FindAllusersComponent,
    FindOneuserComponent,
    StoreUserComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
