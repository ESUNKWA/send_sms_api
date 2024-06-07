import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSenderDto } from './dto/create-sender.dto';
import { UpdateSenderDto } from './dto/update-sender.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sender } from './entities/sender.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SenderService {

  constructor( 
    @InjectRepository(Sender)
    private senderRepository: Repository<Sender>  ) {}

  async create(createSender: CreateSenderDto) {
    return await this.senderRepository.save(createSender);
  }

  async findAll(): Promise<Sender[]> {
    return await this.senderRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} sender`;
  }

  public async update(id: number, updateSenderDto: UpdateSenderDto): Promise<string> {
    const data = await this.senderRepository.preload({
      id,
      ...updateSenderDto
    });

    if( !data ){
      throw new NotFoundException('Aucune élément trouvé');
    }

    const updateData = this.senderRepository.save(data);

    return 'Modification effectuée avec succès';

  }

  remove(id: number) {
    return `This action removes a #${id} sender`;
  }
}
