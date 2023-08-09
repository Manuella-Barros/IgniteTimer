import { ReactNode, createContext, useEffect, useReducer, useState } from "react";
import { actionTypes, cyclesReducer } from "../reducers/cyclesReducer";

export interface CyclesProps {
    id: string,
    taskName: string,
    taskMinutes: number,
    startDate: Date,
    interruptDate?: Date,
    finishDate?: Date,
}

// Interface do contexto
interface CyclesContextProps {
    activeCycle: CyclesProps | undefined,
    activeCycleId: string | null,
    secondsPassed: number,
    cycles: CyclesProps[];
    markCycleAsFinished: () => void,
    handleSecondsPassed: (a: number) => void,
    createCycle: (a: dataProps) => void,
    interruptCycle: () => void,
    handleRemoveCycle: (a: string | undefined) => void,
}

interface dataProps{
    taskName: string,
    taskMinutes: number,
}

export const CyclesContext = createContext({} as CyclesContextProps)

interface CyclesContextProviderProps {
    children: ReactNode
}

export function CyclesContextProvider({children} :CyclesContextProviderProps){
    const [cyclesState, dispatch] = useReducer(
            cyclesReducer, 
            {cycles: [], activeCycleId: null},
            (initialState) => {
                const storedCycles = localStorage.getItem('IgniteFeed:cycles')
                
                if(storedCycles){
                    return JSON.parse(storedCycles)
                }

                return initialState;
            }
        );

    useEffect(() => {
        localStorage.setItem('IgniteFeed:cycles', JSON.stringify(cyclesState))
    }, [cyclesState])

    const {activeCycleId, cycles} = cyclesState

    const [secondsPassed, setSecondsPassed] = useState<number>(0);
    const activeCycle = cycles.find((cycle: CyclesProps) => cycle.id == activeCycleId);

    //Pra facilitar a interface do setCycles
    function markCycleAsFinished(){
        dispatch({
            type: actionTypes.MARK_CYCLE_AS_FINISHED,
            payload: {
                activeCycleId,
            }
        })
    }
    //Pra facilitar a interface do setSecondsPassed
    function handleSecondsPassed(seconds: number){
        setSecondsPassed(seconds);
    }

    //Para criar um novo ciclo
    function createCycle(data: dataProps){
        const idTask = new Date().getTime().toString();
        const newCycle: CyclesProps = {
            id: idTask,
            taskName: data.taskName,
            taskMinutes: data.taskMinutes,
            startDate: new Date(),
        }

        dispatch({
            type: actionTypes.CREATE_CYCLE,
            payload: {
                newCycle,
            }
        })
        setSecondsPassed(0);
    }

    function interruptCycle(){
        document.title = 'Ignite Timer';
        
        dispatch({
            type: actionTypes.INTERRUPT_CYCLE,
            payload: {
                activeCycleId
            }
        })
        
        setSecondsPassed(0);
    }

    //Remove um ciclo
    function handleRemoveCycle(id: string | undefined){
        const filteredCycle = cycles.filter((cycle: CyclesProps) => {
            if(cycle.id != id){
                return cycle
            }
        })

        console.log(filteredCycle)
        
        dispatch({
            type: actionTypes.REMOVE_CYCLE,
            payload: {
                filteredCycle,
            }
        })
    }

    return (
        <CyclesContext.Provider value={{ activeCycle, activeCycleId, markCycleAsFinished, secondsPassed, handleSecondsPassed, createCycle, interruptCycle, cycles , handleRemoveCycle}}>{children}</CyclesContext.Provider>
    )
}