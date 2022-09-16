import chai, { use } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { Request, Response } from 'express';
import * as sinon from 'sinon';
import CarController from '../../../controllers/CarController';
import { ErrorTypes } from '../../../helpers/ErrorCatalog';
import StatusCodes from '../../../helpers/StatusCodes';
import Car from '../../../models/Car';
import CarService from '../../../services/CarService';
import {
  validDocument,
  validDocumentWithId
} from '../../mocks/Car';
const { expect } = chai;

use(chaiAsPromised);

describe('Car controller', () => {
  const model = new Car();
  const service = new CarService(model);
  const controller = new CarController(service);

  const req = {} as Request;
  const res = {} as Response;

  before(async () => {
    sinon.stub(service, 'create').resolves(validDocumentWithId);

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
});
