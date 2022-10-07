import { HttpService, Injectable } from "@nestjs/common";
import { map } from 'rxjs/operators';
@Injectable({})
export class UserService{
    constructor(private httpService: HttpService) {}
    getAllUsers() {
        return this.httpService
        .get('https://24pullrequests.com/users.json')
        .pipe(
            map((response) => response.data)
        )
    }

    getUserBy(userId) {
        return this.httpService
        .get(`https://24pullrequests.com/users/${userId.userId}.json`)
        .pipe(
            map((response) => response.data)
        )
    }
}