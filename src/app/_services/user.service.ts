import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/api/auth/login`);
    }

    getById(id: number) {
        return this.http.get(`${environment.apiUrl}/api/auth/login` + id);
    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/api/auth/login`, user);
    }

    update(user: User) {
        return this.http.put(`${environment.apiUrl}/api/auth/login` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/api/auth/login` + id);
    }
}