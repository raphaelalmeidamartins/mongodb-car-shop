import chai, { use } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { Request, Response } from 'express';
import * as sinon from 'sinon';
import MotorcycleController from '../../../controllers/MotorcycleController';
import StatusCodes from '../../../helpers/StatusCodes';
import Motorcycle from '../../../models/Motorcycle';
import MotorcycleService from '../../../services/MotorcycleService';
import {
  collection,
  updatedDocument,
  updatedDocumentWithId,
  validDocument,
  validDocumentWithId,
} from '../../mocks/Motorcycle';
const { expect } = chai;

use(chaiAsPromised);

describe('Motorcycle controller', () => {
  const model = new Motorcycle();
  const service = new MotorcycleService(model);
  const controller = new MotorcycleController(service);

  const req = {} as Request;
  const res = {} as Response;

  before(async () => {
    sinon.stub(service, 'create').resolves(validDocumentWithId);
    sinon.stub(service, 'read').resolves(collection);
    sinon.stub(service, 'readOne').resolves(validDocumentWithId);
    sinon.stub(service, 'update').resolves(updatedDocumentWithId);
    sinon.stub(service, 'delete').resolves(validDocumentWithId);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    res.sendStatus = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore();
  });

  describe('#register', () => {
    it('should return status 201 with the created document', async () => {
      req.body = validDocument;
      await controller.register(req, res);

      expect((res.status as sinon.SinonStub)
        .calledWith(StatusCodes.Created)).to.be.true;
      expect((res.json as sinon.SinonStub)
        .calledWith(validDocumentWithId)).to.be.true;
    });
  });

  describe('#list', () => {
    it('should return status 200 with the all the available documents', async () => {
      await controller.list(req, res);

      expect((res.status as sinon.SinonStub)
        .calledWith(StatusCodes.Ok)).to.be.true;
      expect((res.json as sinon.SinonStub)
        .calledWith(collection)).to.be.true;
    });
  });

  describe('#getById', () => {
    it('should return status 200 with the document corresponding to the provided id', async () => {
      req.params = { id: validDocumentWithId._id};
      await controller.getById(req, res);

      expect((res.status as sinon.SinonStub)
        .calledWith(StatusCodes.Ok)).to.be.true;
      expect((res.json as sinon.SinonStub)
        .calledWith(validDocumentWithId)).to.be.true;
    });
  });

  describe('#update', () => {
    it('should return status 200 with the updated document', async () => {
      req.body = updatedDocument;
      req.params = { id: validDocumentWithId._id};
      await controller.update(req, res);

      expect((res.status as sinon.SinonStub)
        .calledWith(StatusCodes.Ok)).to.be.true;
      expect((res.json as sinon.SinonStub)
        .calledWith(updatedDocumentWithId)).to.be.true;
    });
  });

  describe('#delete', () => {
    it('should return status 204 with the document is deleted succesfully', async () => {
      req.params = { id: validDocumentWithId._id};
      await controller.delete(req, res);

      expect((res.sendStatus as sinon.SinonStub)
        .calledWith(StatusCodes.NoContent)).to.be.true;
    });
  });
});
