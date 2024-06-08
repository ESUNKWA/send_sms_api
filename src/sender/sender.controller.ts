import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SenderService } from './sender.service';
import { CreateSenderDto } from './dto/create-sender.dto';
import { UpdateSenderDto } from './dto/update-sender.dto';

@Controller('sender')
export class SenderController {
  constructor(private readonly senderService: SenderService) {}

  @Post()
  create(@Body() createSenderDto: CreateSenderDto) {
    return this.senderService.create(createSenderDto);
  }

  @Get()
  findAll() {
    return this.senderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.senderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSenderDto: UpdateSenderDto) {
    return this.senderService.update(+id, updateSenderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.senderService.remove(+id);
  }

}
