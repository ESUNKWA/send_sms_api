import { Test, TestingModule } from '@nestjs/testing';
import { ApismsController } from './apisms.controller';
import { ApismsService } from './apisms.service';

describe('ApismsController', () => {
  let controller: ApismsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApismsController],
      providers: [ApismsService],
    }).compile();

    controller = module.get<ApismsController>(ApismsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
