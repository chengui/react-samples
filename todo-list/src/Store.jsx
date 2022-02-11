import {createStore} from 'redux';


let nextId = 0;

export const Constants = {
  ADD_TASK: 'ADD_TASK',
  TOG_TASK: 'MOD_TASK',
  DEL_TASK: 'DEL_TASK',
};

export const Actions = {
  addTask: (title) => {
    return { type: Constants.ADD_TASK, title };
  },
  togTask: (id) => {
    return { type: Constants.TOG_TASK, id };
  },
  delTask: (id) => {
    return { type: Constants.DEL_TASK, id };
  }
}

export const Reducers = (state = [], action) => {
  switch (action.type) {
    case Constants.ADD_TASK:
      const task = { id: nextId, title: action.title, completed: false };
      nextId++;
      return [...state, task];
    case Constants.TOG_TASK:
      return state.map(item => {
        if (item.id === action.id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      })
    case Constants.DEL_TASK:
      return state.filter(item => {
        return item.id !== action.id;
      });
    default:
      return state;
  }
}

export const Store = createStore(Reducers);
