import { MessagesRepository } from "messages.repository";
import { Injectable } from "@nestjs/common";
@Injectable()
export class MessagesService{
    
    constructor(public messagesRepo:MessagesRepository){
        //service is creating its own dependencies
        //DONOT DO this on real app
        // this.messagesRepo = new MessagesRepository()

        // way to create DI
        this.messagesRepo= messagesRepo
    }
    async findOne(id:string){
        return this.messagesRepo.findOne(id)
    }
    create(content:any){
return this.messagesRepo.create(content)
    }
    findAll(){
        return this.messagesRepo.findAll()
    }

}