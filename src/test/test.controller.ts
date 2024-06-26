import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestService } from './test.service';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { SmsService } from 'src/services/sms/sms/sms.service';
import { get } from 'http';

@Controller('test')
export class TestController {
  constructor(
    private readonly testService: TestService,
    private readonly smsService: SmsService
  ) {}

  @Post('/sms/auth')
  async test(){
    return await this.smsService.authentication();
  }

  @Post('/sms/balance')
  async balance(@Body() token: {token: string}){
    return await this.smsService.sms_balance(token);
  }

  @Post()
  create(@Body() createTestDto: CreateTestDto) {
    return this.testService.create(createTestDto);
  }

  @Get()
  findAll() {
    return this.testService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestDto: UpdateTestDto) {
    return this.testService.update(+id, updateTestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testService.remove(+id);
  }
}
