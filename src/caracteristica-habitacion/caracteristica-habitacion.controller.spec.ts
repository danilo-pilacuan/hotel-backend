import { Test, TestingModule } from '@nestjs/testing';
import { CaracteristicaHabitacionController } from './caracteristica-habitacion.controller';

describe('CaracteristicaHabitacionController', () => {
  let controller: CaracteristicaHabitacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaracteristicaHabitacionController],
    }).compile();

    controller = module.get<CaracteristicaHabitacionController>(CaracteristicaHabitacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
