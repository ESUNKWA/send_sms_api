import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MessagesService {

  constructor( 
    @InjectRepository(Message)
    private messageRepository: Repository<Message>
   ){}

  async create(createMessageDto: CreateMessageDto) {
    return await this.messageRepository.save(createMessageDto);
  }

  findAll() {
    return `This action returns all messages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  async update(id: number, updateMessageDto: UpdateMessageDto) {
    const upd = await this.messageRepository.preload({id, ...updateMessageDto});
    return this.messageRepository.save(upd);
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
