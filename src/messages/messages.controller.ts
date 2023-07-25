import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { get } from 'http';
import {CreateMessageDto} from './dtos/create.message.dto'
import {MessagesService} from './messages.service'
@Controller('messages')
export class MessagesController {
    constructor(public messagesService: MessagesService){
        //service is creating its own dependencies
        //DONOT DO this on real app

    //  this.messagesService = new MessagesService();
    }

   @Get()
    listMessages(){
        return this.messagesService.findAll();

    }
    @Post()
    createMessages(@Body() body:CreateMessageDto){
        return this.messagesService.create(body.content)
    console.log(body)
    }
    @Get('/:id')
    async getMessages(@Param('id') id: string){
     console.log(id);
     const message = await this.messagesService.findOne(id);
     if(!message){
        throw new  NotFoundException('Message not found')
     }
    }
}
