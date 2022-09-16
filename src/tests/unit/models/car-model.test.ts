import chai, { use } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import Mongoose from 'mongoose';
import { Model as MongoModel } from 'mongoose';
import * as sinon from 'sinon';
import { ErrorTypes } from '../../../helpers/ErrorCatalog';
import Car from '../../../models/Car';
import { collection, emptyCollection, updatedDocument, updatedDocumentWithId, validDocument, validDocumentWithId } from '../../mocks/Car';
const { expect } = chai;

use(chaiAsPromised);

describe('Car model', () => {
  before(async () => {
    sinon.stub(MongoModel, 'create').resolves(validDocumentWithId);
    sinon.stub(MongoModel, 'find')
      .onCall(0).resolves(collection)
      .onCall(1).resolves(emptyCollection);
    sinon.stub(MongoModel, 'findById').resolves(validDocumentWithId);
    sinon.stub(MongoModel, 'findByIdAndUpdate').resolves(updatedDocumentWithId);
    sinon.stub(MongoModel, 'findByIdAndDelete').resolves(validDocumentWithId);
    sinon.stub(Mongoose, 'isValidObjectId')
      .onCall(0).returns(true)
      .onCall(1).returns(false)
      .onCall(2).returns(true)
      .onCall(3).returns(false)
      .onCall(4).returns(true)
      .onCall(5).returns(false);
  });

  after(() => {
    sinon.restore();
  });

  const model = new Car();

  describe('#create', () => {
    it('should return the created document', async () => {
      const newDocument = await model.create(validDocument);
      expect(newDocument).to.be.deep.eq(validDocumentWithId);
    });
  });

  describe('#read', () => {
    it('should list all documents', async () => {
      const documents = await model.read();
      expect(documents).to.be.deep.eq(collection)
    });

    it('should return empty array if there are no documents in the collection', async () => {
      const documents = await model.read();
      expect(documents).to.be.deep.eq(emptyCollection)
    });
  });

  describe('#readOne', () => {
    it('should return the document corresponding to the provided id', async () => {
      const document = await model.readOne(validDocumentWithId._id);
      expect(document).to.be.deep.eq(validDocumentWithId);
    });

    it('should throw error if the id is invalid', async () => {
      expect(model.readOne(validDocumentWithId._id))
        .to.eventually.be
        .rejectedWith(ErrorTypes.InvalidMongoId);
    });
  });

  describe('#update', () => {
    it('should return the updated document', async () => {
      const document = await model.update(validDocumentWithId._id, updatedDocument);
      expect(document).to.be.deep.eq(updatedDocumentWithId);
    });

    it('should throw error if the id is invalid', async () => {
      expect(model.readOne(validDocumentWithId._id))
        .to.eventually.be
        .rejectedWith(ErrorTypes.InvalidMongoId);
    });
  });

  describe('#delete', () => {
    it('should return the deleted document', async () => {
      const document = await model.delete(validDocumentWithId._id);
      expect(document).to.be.deep.eq(validDocumentWithId);
    });

    it('should throw error if the id is invalid', async () => {
      expect(model.readOne(validDocumentWithId._id))
        .to.eventually.be
        .rejectedWith(ErrorTypes.InvalidMongoId);
    });
  });
});
