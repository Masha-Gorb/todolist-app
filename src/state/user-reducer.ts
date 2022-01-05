type StateType = {
    age: number
    childrenCount: number
    name: string
     // newName:string
}
type ActionType = {
    type: string
    [key: string]: any
}
export const userReducer = (state: StateType, action: TsarType) => {
    switch (action.type) {
        case 'INCREMENT-AGE':
            state.age = state.age + 1;
            return state;
        case 'INCREMENT-CHILDREN-COUNT':
            state.childrenCount = state.childrenCount + 1;
            return state;

        case 'CHANGE-NAME':{
            // const newState={...state};
            return {...state,name:action.newName}
        }

        default:
            throw new Error("I don't understand this type")
    }
}
 type TsarType=NameACType| ActionType
type NameACType=ReturnType<typeof NameAC>
export const NameAC=(newName:string)=>{
    return{
        type: 'CHANGE-NAME',
        newName: newName
    } as const
}