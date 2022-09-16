import { ICar, ICarWithId } from '../../interfaces/ICar';

export const validDocument: ICar = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2,
};

export const validDocumentWithId: ICarWithId = {
  ...validDocument,
  _id: '6324bd35973976f63aa51806',
};

export const collection: ICarWithId[] = [validDocumentWithId];

export const emptyCollection: ICarWithId[] = [];

export const updatedDocument: ICar = {
  model: 'Uno da Escada',
  year: 1966,
  color: 'blue',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2,
};

export const updatedDocumentWithId: ICarWithId = {
  ...updatedDocument,
  _id: '6324bd35973976f63aa51806',
};

export const notFoundId = '6324bd35973976f63aa51906';

export const invalidMongoId = 'a';

/* Invalid request bodies */

export const invalidModel: ICar = {
  model: 'Un',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2,
};

export const invalidYear1: ICar = {
  model: 'Uno da Escada',
  year: 2023,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2,
};

export const invalidYear2: ICar = {
  model: 'Uno da Escada',
  year: 1899,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2,
};

export const invalidYear3: ICar = {
  model: 'Uno da Escada',
  year: 1963.2,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2,
};

export const invalidColor: ICar = {
  model: 'Uno da Escada',
  year: 1963,
  color: 're',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2,
};

export const invalidBuyValue: ICar = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500.2,
  seatsQty: 2,
  doorsQty: 2,
};

export const invalidDoorsQty1: ICar = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 1,
};

export const invalidDoorsQty2: ICar = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 5,
};

export const invalidDoorsQty3: ICar = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2.2,
};

export const invalidSeatsQty1: ICar = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 1,
};

export const invalidSeatsQty2: ICar = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 8,
};

export const invalidSeatsQty3: ICar = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2.3,
};
