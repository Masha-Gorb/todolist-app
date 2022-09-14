import { Dispatch } from 'redux'
import {setMainErrorACType, setMainStatusAC, setMainStatusACType} from "../main-reducer";
import {authApi, LoginParamsType} from "../../api/todolist-api-";

const initialState = {
  isLoggedIn: false
}
type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'login/SET-IS-LOGGED-IN':
      return {...state, isLoggedIn: action.value}
    default:
      return state
  }
}
// action
export const setIsLoggedInAC = (value: boolean) =>
  ({type: 'login/SET-IS-LOGGED-IN', value} as const)

// thunks
export const loginTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsType>) => {
  dispatch(setMainStatusAC('loading'))
  authApi.login(data)
    .then((res) => {
      if (res.data.resultCode === 0) {
        dispatch(setIsLoggedInAC(true))
        dispatch(setMainStatusAC('succeeded'))
      }
    })
}

// types
type ActionsType = ReturnType<typeof setIsLoggedInAC> | setMainStatusACType | setMainErrorACType