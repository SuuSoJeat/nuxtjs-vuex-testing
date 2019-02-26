import { mutations } from "../../store";

const {increment, incrementByN, setData} = mutations;

describe('mutations', () => {
  it('should increase', () => {
    const state = {counter: 0};
    increment(state);
    expect(state.counter).toBe(1)
  });
  it('should increase by n', function () {
    const state = {counter: 0};
    incrementByN(state, {amount: 5});
    expect(state.counter).toBe(5)
  });
  it('should assign the data to respond', function () {
    const state = {respond: {}};
    const payload = {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    };
    setData(state, payload);
    expect(state.respond).toEqual(payload)
  });
});
