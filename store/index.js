import { todos } from "../api/todos";


export const state = () => ({
  counter: 0,
  respond: {}
});


export const mutations = {
  increment: state => state.counter++,
  incrementByN: (state, payload) => state.counter += payload.amount,
  setData: (state, payload) => state.respond = payload
};

export const getters = {
  evenOrOdd: state => (state.counter % 2 === 0 ? 'even' : 'odd')
};

export const actions = {
  increment({commit}) {
    commit('increment')
  },
  incrementAsync({commit}, payload) {
    setTimeout(() => {
      commit('incrementByN', payload)
    }, 1000)
  },
  getUsers({commit}) {
    todos.getTodos(1).then(data => {
      commit('setData', data)
    })
  }
};
