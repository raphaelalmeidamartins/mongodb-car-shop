import chai, { use } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import * as sinon from 'sinon';
import { ErrorTypes } from '../../../helpers/ErrorCatalog';
import Car from '../../../models/Car';
import CarService from '../../../services/CarService';
import {
  collection,
  emptyCollection,
  invalidBuyValue,
  invalidColor,
  invalidDoorsQty1,
  invalidDoorsQty2,
  invalidDoorsQty3,
  invalidModel,
  invalidSeatsQty1,
  invalidSeatsQty2,
  invalidSeatsQty3,
  invalidYear1,
  invalidYear2,
  invalidYear3,
  notFoundId,
  updatedDocument,
  updatedDocumentWithId,
  validDocument,
  validDocumentWithId
} from '../../mocks/Car';
const { expect } = chai;

use(chaiAsPromised);

describe('Car service', () => {
  const model = new Car();
  const service = new CarService(model);

  before(async () => {
    sinon.stub(model, 'create').resolves(validDocumentWithId);
    sinon.stub(model, 'read')
      .onCall(0).resolves(collection)
      .onCall(1).resolves(emptyCollection);
    sinon.stub(model, 'readOne')
      .onCall(0).resolves(validDocumentWithId)
      .onCall(1).resolves(null)
      .onCall(2).resolves(validDocumentWithId)
      .onCall(3).resolves(null)
      .onCall(4).resolves(validDocumentWithId)
      .onCall(5).resolves(null);
    sinon.stub(model, 'update').resolves(updatedDocumentWithId);
    sinon.stub(model, 'delete').resolves(validDocumentWithId);
  });

  after(() => {
    sinon.restore();
  });

  describe('#create', () => {
    it('should return the created document', async () => {
      const newDocument = await service.create(validDocument);
      expect(newDocument).to.be.deep.eq(validDocumentWithId);
    });

    it('should throw error if the model has less than three characters', () => {
      expect(service.create(invalidModel))
        .to.eventually.be.rejected;
    });

    it('should throw error if the year is greater than 2022', () => {
      expect(service.create(invalidYear1))
        .to.eventually.be.rejected;
    });

    it('should throw error if the year is less than 1900', () => {
      expect(service.create(invalidYear2))
        .to.eventually.be.rejected;
    });

    it('should throw error if the year is not an interger', () => {
      expect(service.create(invalidYear3))
        .to.eventually.be.rejected;
    });

    it('should throw error if the color has less than three characters', () => {
      expect(service.create(invalidColor))
        .to.eventually.be.rejected;
    });

    it('should throw error if the buyValue is not an interger', () => {
      expect(service.create(invalidBuyValue))
        .to.eventually.be.rejected;
    });

    it('should throw error if the doorsQty is less than 2', () => {
      expect(service.create(invalidDoorsQty1))
        .to.eventually.be.rejected;
    });

    it('should throw error if the doorsQty is greater than 4', () => {
      expect(service.create(invalidDoorsQty2))
        .to.eventually.be.rejected;
    });

    it('should throw error if the doorsQty is not an interger', () => {
      expect(service.create(invalidDoorsQty3))
        .to.eventually.be.rejected;
    });

    it('should throw error if the seatsQty is less than 2', () => {
      expect(service.create(invalidSeatsQty1))
        .to.eventually.be.rejected;
    });

    it('should throw error if the doorsQty is greater than 7', () => {
      expect(service.create(invalidSeatsQty2))
        .to.eventually.be.rejected;
    });

    it('should throw error if the doorsQty is not an interger', () => {
      expect(service.create(invalidSeatsQty3))
        .to.eventually.be.rejected;
    });
  });

  describe('#read', () => {
    it('should list all documents', async () => {
      const documents = await service.read();
      expect(documents).to.be.deep.eq(collection)
    });

    it('should return empty array if there are no documents in the collection', async () => {
      const documents = await service.read();
      expect(documents).to.be.deep.eq(emptyCollection)
    });
  });

  describe('#readOne', () => {
    it('should return the document corresponding to the provided id', async () => {
      const document = await service.readOne(validDocumentWithId._id);
      expect(document).to.be.deep.eq(validDocumentWithId);
    });

    it('should throw error if there is no document with the provided id', async () => {
      expect(service.readOne(notFoundId))
        .to.eventually.be
        .rejectedWith(ErrorTypes.EntityNotFound);
    });
  });

  describe('#update', () => {
    it('should return the updated document', async () => {
      const document = await service.update(validDocumentWithId._id, updatedDocument);
      expect(document).to.be.deep.eq(updatedDocumentWithId);
    });

    it('should throw error if there is no document with the provided id', async () => {
      expect(service.update(notFoundId, updatedDocument))
        .to.eventually.be
        .rejectedWith(ErrorTypes.EntityNotFound);
    });

    it('should throw error if the model has less than three characters', () => {
      expect(service.update(validDocumentWithId._id, invalidModel))
        .to.eventually.be.rejected;
    });

    it('should throw error if the year is greater than 2022', () => {
      expect(service.update(validDocumentWithId._id, invalidYear1))
        .to.eventually.be.rejected;
    });

    it('should throw error if the year is less than 1900', () => {
      expect(service.update(validDocumentWithId._id, invalidYear2))
        .to.eventually.be.rejected;
    });

    it('should throw error if the year is not an interger', () => {
      expect(service.update(validDocumentWithId._id, invalidYear3))
        .to.eventually.be.rejected;
    });

    it('should throw error if the color has less than three characters', () => {
      expect(service.update(validDocumentWithId._id, invalidColor))
        .to.eventually.be.rejected;
    });

    it('should throw error if the buyValue is not an interger', () => {
      expect(service.update(validDocumentWithId._id, invalidBuyValue))
        .to.eventually.be.rejected;
    });

    it('should throw error if the doorsQty is less than 2', () => {
      expect(service.update(validDocumentWithId._id, invalidDoorsQty1))
        .to.eventually.be.rejected;
    });

    it('should throw error if the doorsQty is greater than 4', () => {
      expect(service.update(validDocumentWithId._id, invalidDoorsQty2))
        .to.eventually.be.rejected;
    });

    it('should throw error if the doorsQty is not an interger', () => {
      expect(service.update(validDocumentWithId._id, invalidDoorsQty3))
        .to.eventually.be.rejected;
    });

    it('should throw error if the seatsQty is less than 2', () => {
      expect(service.create(invalidSeatsQty1))
        .to.eventually.be.rejected;
    });

    it('should throw error if the doorsQty is greater than 7', () => {
      expect(service.update(validDocumentWithId._id, invalidSeatsQty2))
        .to.eventually.be.rejected;
    });

    it('should throw error if the doorsQty is not an interger', () => {
      expect(service.update(validDocumentWithId._id, invalidSeatsQty3))
        .to.eventually.be.rejected;
    });
  });

  describe('#delete', () => {
    it('should return the deleted document', async () => {
      const document = await service.delete(validDocumentWithId._id);
      expect(document).to.be.deep.eq(validDocumentWithId);
    });

    it('should throw error if there is no document with the provided id', async () => {
      expect(service.readOne(notFoundId))
        .to.eventually.be
        .rejectedWith(ErrorTypes.EntityNotFound);
    });
  });
});
