import { Test, TestingModule } from '@nestjs/testing';
import { RegistroRestauranteController } from './registro-restaurante.controller';

describe('RegistroRestauranteController', () => {
  let controller: RegistroRestauranteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistroRestauranteController],
    }).compile();

    controller = module.get<RegistroRestauranteController>(RegistroRestauranteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
