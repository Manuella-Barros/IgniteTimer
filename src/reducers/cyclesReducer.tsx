import { CyclesProps } from "../contexts/CyclesContext";

interface stateProps {
    cycles: CyclesProps[],
    activeCycleId: string | null,
}

export enum actionTypes {
    CREATE_CYCLE= 'CREATE_CYCLE',
    INTERRUPT_CYCLE= 'INTERRUPT_CYCLE',
    MARK_CYCLE_AS_FINISHED= 'MARK_CYCLE_AS_FINISHED',
    REMOVE_CYCLE= 'REMOVE_CYCLE',
}

export function cyclesReducer(state: stateProps, action: any) {
    switch(action.type){
        case actionTypes.CREATE_CYCLE:
            return {
            ...state,
                cycles: [...state.cycles, action.payload.newCycle],
                activeCycleId: action.payload.newCycle.id
            }
        case actionTypes.INTERRUPT_CYCLE:
            return {
                ...state,
                cycles: state.cycles.map(cycle => {
                    if(cycle.id === action.payload.activeCycleId){
                        return {...cycle, interruptDate: new Date()};
                    } else{
                        return cycle;
                    }
                }),
                activeCycleId: null
            }       
        case actionTypes.MARK_CYCLE_AS_FINISHED:
            return {
                ...state,
                cycles: state.cycles.map(cycle => {
                    if(cycle.id === state.activeCycleId){
                        return {...cycle, finishDate: new Date()};
                    } else{
                        return cycle;
                    }
                }),
                activeCycleId: null
            }
        case actionTypes.REMOVE_CYCLE:
            return {
                cycles: action.payload.filteredCycle,
                activeCycleId: null
            }
        default:
            return state;
    }
}
