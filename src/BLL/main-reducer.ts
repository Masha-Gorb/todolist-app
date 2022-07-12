export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
  status: 'loading' as RequestStatusType,
  error: 'Error' as string | null
}

type InitialStateType = typeof initialState

export const mainReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'APP/SET-STATUS':
      return {...state, status: action.status}
    case 'APP/SET-ERROR': {
      return {...state, error: action.error}
    }
    default:
      return state
  }
}

export const setMainErrorAC = (error: string | null) => {
  return {
    type: 'APP/SET-ERROR',
    error,
  }
}

export const setMainStatusAC = (status: RequestStatusType) => {
  return {
    type: 'APP/SET-STATUS',
    status
  }
}
type ActionsType = any