import { actions } from '../../store'
import axios from 'axios'

jest.mock('axios');

const testAction = (action, payload, state, expectedMutations, done) => {
  let count = 0;

  // mock commit
  const commit = (type, payload) => {
    const mutation = expectedMutations[count];

    try {
      expect(type).toEqual(mutation.type);
      if (payload) {
        expect(payload).toEqual(mutation.payload)
      }
    } catch (error) {
      done(error)
    }

    count++;
    if (count >= expectedMutations.length) {
      done()
    }
  };

  // call the action with mocked store and arguments
  action({commit, state}, payload);

  // check if no mutations should have been dispatched
  if (expectedMutations.length === 0) {
    expect(count).toEqual(0);
    done()
  }
};

describe('actions', () => {
  it('increment by 1', done => {
    const state = {counter: 0};
    testAction(actions.increment, null, state, [
      {type: 'increment'}
    ], done)

  });
  it('should increment by n async', done => {
    const state = {counter: 0};
    const payload = {
      amount: 5
    };
    testAction(actions.incrementAsync, payload, state, [
      {type: 'incrementByN', payload: payload}
    ], done)
  });
  it('should return mock axios', (done) => {
    const payload = {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    };
    axios.get.mockResolvedValue(payload);
    testAction(actions.getUsers, null, {}, [
      {type: 'setData', payload: payload}
    ], done)
  });
});
