global.chai = require('chai');
global.expect = global.chai.expect;
global.sinon = require('sinon');
global.sinonAsPromised = require('sinon-as-promised');
global.chai.use(require('sinon-chai'));

require('babel/register');

beforeEach(function() {
    this.sandbox = global.sinon.sandbox.create();
    global.stub = this.sandbox.stub.bind(this.sandbox);
    global.spy = this.sandbox.spy.bind(this.sandbox);
});

afterEach(function () {
    delete global.stub;
    delete global.spy;
    this.sandbox.restore();
});
