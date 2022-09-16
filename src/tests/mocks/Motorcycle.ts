import { IMotorcycle, IMotorcycleWithId } from '../../interfaces/IMotorcycle';

export const validDocument: IMotorcycle = {
  model: 'Honda CG Titan 125',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  category: 'Street',
  engineCapacity: 125,
};

export const validDocumentWithId: IMotorcycleWithId = {
  ...validDocument,
  _id: '6324bd35973976f63aa51806',
};

export const collection: IMotorcycleWithId[] = [validDocumentWithId];

export const emptyCollection: IMotorcycleWithId[] = [];

export const updatedDocument: IMotorcycle = {
  model: 'Honda CG Titan 125',
  year: 1963,
  color: 'black',
  buyValue: 3500,
  category: 'Street',
  engineCapacity: 125,
};

export const updatedDocumentWithId: IMotorcycleWithId = {
  ...updatedDocument,
  _id: '6324bd35973976f63aa51806',
};

export const notFoundId = '6324bd35973976f63aa51906';

export const invalidMongoId = 'a';

/* Invalid request bodies */

export const invalidModel: IMotorcycle = {
  model: 'Ho',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  category: 'Street',
  engineCapacity: 125,
};

export const invalidYear1: IMotorcycle = {
  model: 'Honda CG Titan 125',
  year: 2023,
  color: 'red',
  buyValue: 3500,
  category: 'Street',
  engineCapacity: 125,
};

export const invalidYear2: IMotorcycle = {
  model: 'Honda CG Titan 125',
  year: 1899,
  color: 'red',
  buyValue: 3500,
  category: 'Street',
  engineCapacity: 125,
};

export const invalidYear3: IMotorcycle = {
  model: 'Honda CG Titan 125',
  year: 1963.2,
  color: 'red',
  buyValue: 3500,
  category: 'Street',
  engineCapacity: 125,
};

export const invalidColor: IMotorcycle = {
  model: 'Honda CG Titan 125',
  year: 1963,
  color: 're',
  buyValue: 3500,
  category: 'Street',
  engineCapacity: 125,
};

export const invalidBuyValue: IMotorcycle = {
  model: 'Honda CG Titan 125',
  year: 1963,
  color: 'red',
  buyValue: 3500.2,
  category: 'Street',
  engineCapacity: 125,
};

export const invalidEngineCapacity1: IMotorcycle = {
  model: 'Honda CG Titan 125',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  category: 'Street',
  engineCapacity: 0,
};

export const invalidEngineCapacity2: IMotorcycle = {
  model: 'Honda CG Titan 125',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  category: 'Street',
  engineCapacity: 2501,
};

export const invalidEngineCapacity3: IMotorcycle = {
  model: 'Honda CG Titan 125',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  category: 'Street',
  engineCapacity: 250.2,
};
