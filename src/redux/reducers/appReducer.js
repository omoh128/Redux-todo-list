import { ADD_ITEM, DELETE_ITEM } from "../actionTypes";

const initialState = {
  list: [{ id: 1, text: "colors" }, { id: 2, text: "funiture" }]
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      state = {
        list: [...state.list, action.payload]
      };
      return state;
    case DELETE_ITEM:
      state = {
        list: state.list.filter((todo) => todo.id !== action.payload)
      };
      return state;
    default:
      return state;
  }
}
