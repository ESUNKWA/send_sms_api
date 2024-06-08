import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { SmsService } from 'src/services/sms/sms/sms.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [TestController],
  providers: [TestService, SmsService],
  imports: [HttpModule]
})
export class TestModule {}
