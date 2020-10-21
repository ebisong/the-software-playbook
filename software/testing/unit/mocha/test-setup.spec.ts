import chai, { expect } from "chai";
import mongoose from "mongoose";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { MongoMemoryServer } from "mongodb-memory-server";
import faker from "faker";

chai.use(sinonChai);

let sandbox: any;
let mongoServer: any;
describe("MyTest", () => {
  afterEach(() => {
    sandbox.restore();
  });
  before(async () => {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    };
    mongoServer = new MongoMemoryServer();
    const mongoUri = await mongoServer.getUri();
    await mongoose.connect(mongoUri, options);
  });
  after(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });
  beforeEach(async () => {
    await mongoose.connection.db.dropDatabase();
    sandbox = sinon.createSandbox();
  });
  it("should run test", async () => {
      // Arrange
      const testdata = faker.lorem.paragraph();

      // Act

      // Assert
      expect(testdata).to.not.equal(true);
  });
});
