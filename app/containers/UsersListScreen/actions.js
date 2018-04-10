import { LOAD, REMOVE, CREATE, EDIT } from './constants';

export function load() {
  return {
    type: LOAD,
  };
}

export function remove(ids) {
  return {
    type: REMOVE,
    payload: {
      ids,
    },
  };
}

export function create(email, password) {
  return {
    type: CREATE,
    payload: {
      email,
      password,
    },
  };
}

export function edit(id, email, password) {
  return {
    type: EDIT,
    payload: {
      id,
      email,
      password,
    },
  };
}