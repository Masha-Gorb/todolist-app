export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'loading' as RequestStatusType
}

type InitialStateType = typeof initialState

export const mainReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'APP/SET-STATUS':
      return {...state, status: action.status}
    default:
      return state
  }
}

export const setMainStatusAC = (status: RequestStatusType) => {
  return {
    type: 'APP/SET-STATUS',
    status
  }
}

type ActionsType = any