import * as m from 'mocha';
import { assert } from 'chai';
import npmPackage from '../src/index';

// Your tests come here

m.describe('NPM Package', () => {
    m.it('should be a Function', () => {
        assert.isFunction(npmPackage);
    });
});