import assert from 'assert';
import asyncAwaitNodejs from '../lib';

describe('async-await-nodejs', function () {
  it('should have unit test!', function () {
    assert(asyncAwaitNodejs);
    assert(asyncAwaitNodejs.init);
    asyncAwaitNodejs.init();
    assert(true);
  });
});
