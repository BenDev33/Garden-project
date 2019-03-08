import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }
    getUserDetails(email, password){
return this.http.post('/api/auth/login', {
    email,
    password
}).subscribe(data => {
    console.log(data)
})
    }
}