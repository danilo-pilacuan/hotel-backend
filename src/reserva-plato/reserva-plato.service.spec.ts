import { Test, TestingModule } from '@nestjs/testing';
import { ReservaPlatoService } from './reserva-plato.service';

describe('ReservaPlatoService', () => {
  let service: ReservaPlatoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReservaPlatoService],
    }).compile();

    service = module.get<ReservaPlatoService>(ReservaPlatoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
