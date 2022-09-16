import { ICar, ICarWithId } from '../../interfaces/ICar';

export const validDocument: ICar = {
  model: 'Uno da Escada',
  year: 1963,
  color: 'red',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
};

export const validDocumentWithId: ICarWithId = {
  ...validDocument,
  _id: "6324bd35973976f63aa51806"
};

export const collection: ICarWithId[] = [
  validDocumentWithId,
];

export const emptyCollection: ICarWithId[] = [];

export const updatedDocument: ICar = {
  model: 'Uno da Escada',
  year: 1966,
  color: 'blue',
  buyValue: 3500,
  seatsQty: 2,
  doorsQty: 2
};

export const updatedDocumentWithId: ICarWithId = {
  ...updatedDocument,
  _id: "6324bd35973976f63aa51806",
};
