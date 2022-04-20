import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FakeUserService {
  private _http: any;
  //HttpClientModule helps angular to inject HttpClient to FakeUSerSevice
  constructor(private_http: HttpClient) { }

  public getFakeUsers(): Observable<any> {
    let url = "https://jasonplaceholder.typicode.com/users";
    return this._http.get(url);
  }
}
