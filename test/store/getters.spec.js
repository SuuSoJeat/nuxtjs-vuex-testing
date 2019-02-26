import { getters } from "../../store";

describe('getters', () => {
  it('"evenOrOdd" returns even if "state.count" is even', () => {
    const state = {
      counter: 2
    };
    expect(getters.evenOrOdd(state)).toBe('even')
  });

  it('"evenOrOdd" returns odd if "state.count" is odd', () => {
    const state = {
      counter: 1
    };
    expect(getters.evenOrOdd(state)).toBe('odd')
  })
});

