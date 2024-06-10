import { Module } from '@nestjs/common';
import { ApismsService } from './apisms.service';
import { ApismsController } from './apisms.controller';
import { HttpModule } from '@nestjs/axios';
import { TokensService } from 'src/tokens/tokens.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Token } from 'src/tokens/entities/token.entity';

@Module({
  controllers: [ApismsController],
  providers: [ApismsService, TokensService],
  imports: [HttpModule, TypeOrmModule.forFeature([Token])]
})
export class ApismsModule {}
