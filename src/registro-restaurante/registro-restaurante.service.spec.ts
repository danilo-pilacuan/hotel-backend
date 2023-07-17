import { Test, TestingModule } from '@nestjs/testing';
import { RegistroRestauranteService } from './registro-restaurante.service';

describe('RegistroRestauranteService', () => {
  let service: RegistroRestauranteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistroRestauranteService],
    }).compile();

    service = module.get<RegistroRestauranteService>(RegistroRestauranteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
