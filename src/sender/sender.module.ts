import { Module } from '@nestjs/common';
import { SenderService } from './sender.service';
import { SenderController } from './sender.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sender } from './entities/sender.entity';
import { SmsService } from 'src/services/sms/sms/sms.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [SenderController],
  providers: [SenderService, SmsService],
  imports: [HttpModule,TypeOrmModule.forFeature([Sender]) ]
})
export class SenderModule {}
