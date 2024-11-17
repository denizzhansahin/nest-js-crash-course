import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response,Request, response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private userService:UsersService){}

    @Get()
    getUsers() {
        return this.userService.fetchUsers()
    }



    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body(ValidateCreateUserPipe) userData:CreateUserDto){
        console.log(typeof userData.age.toPrecision())
        console.log(userData)
        return this.userService.createUsers(userData)
    }



    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        const user = this.userService.fetchUserById(id)
        if(!user)
            throw new HttpException('User not found',HttpStatus.BAD_REQUEST)
        return user
    }








    @Get(':id2/:postId')
    getUserById2(@Param('id') id: string,@Param('postId') postId:string) {
        console.log(id)
        return {id, postId}
    }


    @Post('create1')
    createUser1(@Req() request:Request, @Res() response:Response){
        console.log(request.body)
        response.send('Created')
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


/*

  @Get()
    getUsers(@Query('sortDesc',ParseBoolPipe) sortDesc:boolean) {
        return [{username:'Anson',email:'anson@anson.com'}]
    }

    */