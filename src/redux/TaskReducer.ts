export const TaskReducer = (state: any, action: generalType) => {

    switch (action.type) {
        case 'REMOVE-TASK' : {
            return state
        }
        default: return state
    }
}

type generalType = removeTaskACType
type removeTaskACType = ReturnType<typeof removeTaskAC>

export const removeTaskAC = () => {
    return {
        type: 'REMOVE-TASK'
    } as const
}