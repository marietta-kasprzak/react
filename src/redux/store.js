import shortid from "shortid";
import { createStore } from "redux";
import initialState from "./initialState";
import { strContains } from "../utils/strContains";

//selectors
export const getFilteredCards = (state, columnId) => {
  console.log(state,columnId)
  return state.cards
  .filter(card => card.columnId === columnId && card.title.toLowerCase().includes(state.searchString.toLowerCase()))
;}

export const getAllColumns = (state) => state.columns;
export const addColumn = (payload) => ({ type: "ADD_COLUMN", payload });
export const addCard = (payload) => ({ type: "ADD_CARD", payload });
export const updateSearchString = (payload) => ({
  type: "UPDATE_SEARCH_STRING",
  payload,
});


const reducer = (state, action) => {
 console.log (state , action)
  switch (action.type) {
    case "ADD_COLUMN":
      return {
        ...state,
        columns: [...state.columns, { ...action.payload, id: shortid() }],
      };
    case "ADD_CARD":
      return {
        ...state,
        cards: [...state.cards, { ...action.payload, id: shortid() }],
      };
    case "UPDATE_SEARCH_STRING":
      return { ...state, searchString: action.payload };
    default:
      return state;
  }
};

// export const searchString = 


export const getFilteredCard = ({cards, searchString}, columnId) => cards.filter(card => card.columnId === columnId && strContains(card.title, searchString));

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
