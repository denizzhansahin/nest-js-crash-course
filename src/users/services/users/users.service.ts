import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/types/types';

@Injectable()
export class UsersService {
    private fakeUsers = [{username:'Anson', email:'anson@anson.com'},
        {username:'Anson', email:'anson@anson.com'},
        {username:'Anson', email:'anson@anson.com'},
        {username:'Anson', email:'anson@anson.com'},
        {username:'Anson', email:'anson@anson.com'},
    ]
    fetchUsers() {
        return this.fakeUsers
    }

    createUsers(userDetails:CreateUserType){
        this.fakeUsers.push(userDetails)
        return
    }

    fetchUserById(id:number){
        return {id:1,username:'Anson',email:'anson@email.com'}
    }
}
