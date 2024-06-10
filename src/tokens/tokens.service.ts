import { Injectable } from '@nestjs/common';
import { CreateTokenDto } from './dto/create-token.dto';
import { UpdateTokenDto } from './dto/update-token.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Token } from './entities/token.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TokensService {

  constructor( 
    @InjectRepository(Token)
    private tokenRepository: Repository<Token>
   ){}

  create(createTokenDto: CreateTokenDto) {
    try {
      return this.tokenRepository.save(createTokenDto);
    } catch (error) {
      return error.stack;
    }
  }

  async findAll() {
    return await this.tokenRepository.find(
      {select: { 'id': true, 'access_token':true}
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} token`;
  }

  async update(id: number = 2, updateTokenDto: UpdateTokenDto) {
    try {
      const checkData = await this.tokenRepository.preload({id, ...updateTokenDto});
      if(checkData){
        return await this.tokenRepository.save(checkData);
      }

    } catch (error) {
      return error.stack;
    }
  }

  remove(id: number) {
    return `This action removes a #${id} token`;
  }
}
