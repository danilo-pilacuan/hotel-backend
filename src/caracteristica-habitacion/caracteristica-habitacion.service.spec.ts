import { Test, TestingModule } from '@nestjs/testing';
import { CaracteristicaHabitacionService } from './caracteristica-habitacion.service';

describe('CaracteristicaHabitacionService', () => {
  let service: CaracteristicaHabitacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CaracteristicaHabitacionService],
    }).compile();

    service = module.get<CaracteristicaHabitacionService>(CaracteristicaHabitacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
