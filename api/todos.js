import axios from "axios";

export const todos = {
  getTodos(id) {
    return axios.get(`https://jsonplaceholder.typicode.com//todos/${id}`).then(resp => resp.data)
  }
};
