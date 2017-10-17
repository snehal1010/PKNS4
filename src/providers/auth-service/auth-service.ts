import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/RX';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export class User {
  name: string;
  email: string;
 
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}
@Injectable()
export class AuthServiceProvider {
 currentUser: User;
  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }
    public login(credentials) {

    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
		/* let data=JSON.stringify({name:credentials.email ,pass:credentials.password});
		// alert(data);
         this.http.get('http://skylimit.co.in/Client/ChatApplication/getData.php?data=data')
				.map(res => res.json())
				.subscribe(result => {
				Fdata=result.data;
				 //this.currentUser=result.data;
				alert("success "+Fdata.name);
				}, (err) => {
				alert("failed"+err);
				});*/

          let access = true;//( credentials.pass === '1234');
		
      //  this.currentUser = new User('snehal', 'snehal1010@gmail.com');
        observer.next(access);
        observer.complete();
      });
    }
  }
}
