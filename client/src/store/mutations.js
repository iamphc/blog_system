import * as types from "@store/mutation-types";

export default {
  [types.TOKEN](state, payload) {
    state.token = payload.token;
    localStorage.setItem('token', payload.token);
  }
}