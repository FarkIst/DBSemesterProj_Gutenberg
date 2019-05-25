import * as redux from 'redux';
import { configStore } from '~/app/state';

describe('configureStore', () => {
  jest.spyOn(redux, 'applyMiddleware');
  jest.spyOn(redux, 'combineReducers');
  jest.spyOn(redux, 'compose');
  jest.spyOn(redux, 'createStore');
});

describe('middleware ', () => {
  it('creates proper output', () => {
    const { store, history } = configStore();
    expect(store).toBeInstanceOf(Object);
    expect(history).toBeInstanceOf(Object);
  });

  describe('given a development ENV', () => {
    const ORIGINAL_ENV = process.env.ENV;
    afterEach(() => {
      process.env.ENV = ORIGINAL_ENV;
    });
    const composeEnhancers = jest.fn();
    it('creates store with enhancedcompose', () => {
      process.env.ENV = 'development';
      expect(redux.createStore).toHaveBeenCalledWith(
        expect.any(Function),
        expect.any(Function),
      );
    });
  });
  const reducer = (state = {}, _action) => state;
  describe('given a production ENV', () => {
    const ORIGINAL_ENV = process.env.ENV;
    afterEach(() => {
      process.env.ENV = ORIGINAL_ENV;
    });
    it('creates store with middleware', () => {
      process.env.ENV = 'production';
      expect(redux.createStore).toHaveBeenCalledWith(
        expect.any(Function),
        expect.any(Function),
      );
    });
  });
});
