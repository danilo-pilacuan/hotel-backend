import { Test, TestingModule } from '@nestjs/testing';
import { CaracteristicaController } from './caracteristica.controller';

describe('CaracteristicaController', () => {
  let controller: CaracteristicaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaracteristicaController],
    }).compile();

    controller = module.get<CaracteristicaController>(CaracteristicaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
