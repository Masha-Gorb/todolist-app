import {applyMiddleware, combineReducers, createStore} from "redux";
import {tasksReducer} from "./task-reducer";
import {todolistsReducer} from "./todolist-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  todolists: todolistsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type MainPageRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store
