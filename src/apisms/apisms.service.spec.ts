import { Test, TestingModule } from '@nestjs/testing';
import { ApismsService } from './apisms.service';

describe('ApismsService', () => {
  let service: ApismsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApismsService],
    }).compile();

    service = module.get<ApismsService>(ApismsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
