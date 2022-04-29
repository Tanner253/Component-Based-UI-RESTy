import {initialState, reducer} from './index.js';

describe('testing form reducer', () =>{
  let state = null;

  test('should initialize state', () => { 
    state = reducer(initialState, {});
    expect(state.url).toBe('');
    expect(state.method).toBe('get');
    expect(state.data).toBeTruthy();
  });

  test('should update URL to state', () => { 
    state = reducer(initialState, {
      type: 'HANDLE INPUT TEXT',
      field: 'url',
      payload: 'http://.com',
    });
    expect(state.url).toEqual('http://.com');
  });

  test('should update DATA to state', () => { 
    state = reducer(initialState, {
      type: 'HANDLE INPUT TEXT',
      field: 'data',
      payload: {name: 'albert'},
    });
    expect(state.data).toEqual({name: 'albert'});
  });

  test('should update METHOD to GET', () => { 
    state = reducer(initialState, {
      type: 'HANDLE INPUT TEXT',
      field: 'method',
      payload: 'get',
    });
    expect(state.method).toEqual('get');
  });
  test('should update METHOD to PUT', () => { 
    state = reducer(initialState, {
      type: 'HANDLE INPUT TEXT',
      field: 'method',
      payload: 'put',
    });
    expect(state.method).toEqual('put');
  });
  test('should update METHOD to POST', () => { 
    state = reducer(initialState, {
      type: 'HANDLE INPUT TEXT',
      field: 'method',
      payload: 'post',
    });
    expect(state.method).toEqual('post');
  });
  test('should update METHOD to DELETE', () => { 
    state = reducer(initialState, {
      type: 'HANDLE INPUT TEXT',
      field: 'method',
      payload: 'delete',
    });
    expect(state.method).toEqual('delete');
  });
});