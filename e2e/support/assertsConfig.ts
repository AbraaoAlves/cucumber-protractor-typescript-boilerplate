import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);

export { IWorld, World } from '../support/world';
export var expect = chai.expect;
export type Callback = cucumber.CallbackStepDefinition;
