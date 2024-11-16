import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Response,Request } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
    @Get()
    getUsers() {
        return {username:'Anson',email:'anson@anson.com'}
    }

    @Post('create1')
    createUser1(@Req() request:Request, @Res() response:Response){
        console.log(request.body)
        response.send('Created')
    }


    @Post('create')
    createUser(@Body() userData:CreateUserDto){
        console.log(userData)
        return []
    }

    @Get('posts')
    getUsersPosts(){
        return [
            {username:'Anson',email:'anson@anson.com',
                posts:[{
                    id:1,
                    title:'Post 1',
                },
                {
                    id:2,
                    title:'Post 1',
                },
                {
                    id:3,
                    title:'Post 1',
                },
                {
                    id:4,
                    title:'Post 1',
                },],
            }
        ]
    }


    @Get('posts/comments')
    getUsersPostsComments() {
        return [
            {
                id:1,
                title:"Post 1",
                comments:[],
            }
        ]
    }
}
