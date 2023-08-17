import { Test, TestingModule } from '@nestjs/testing';
import { ReservaPlatoController } from './reserva-plato.controller';

describe('ReservaPlatoController', () => {
  let controller: ReservaPlatoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservaPlatoController],
    }).compile();

    controller = module.get<ReservaPlatoController>(ReservaPlatoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
