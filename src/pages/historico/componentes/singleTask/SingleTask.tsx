import { useContext } from "react";
import { SingleTaskStyle, TasksHeader } from "../../HistoricoStyle.styles";
import { CyclesContext } from "../../../../contexts/CyclesContext";

export type StatusType = 'Em andamento' | 'Interrompido' | 'Concluído'

export interface SingleTaskProps {
    id?: string | undefined,
    typeStyle: 'header' | 'task', 
    taskText: string, 
    taskDuration: string, 
    taskBeginning: string, 
    $taskStatus?: StatusType
}

export function SingleTask({ id, typeStyle, taskText, taskDuration, taskBeginning, $taskStatus }: SingleTaskProps){
    const { handleRemoveCycle } = useContext(CyclesContext);

    
    return (
        <>
            {
                (typeStyle == 'header') && 
                <TasksHeader>
                    <p>{taskText}</p>
                    <p>{taskDuration}</p>
                    <p>{taskBeginning}</p>
                    <p>Status</p>
                </TasksHeader>
            }
            {
                (typeStyle == 'task' && $taskStatus) && 
                <SingleTaskStyle $taskStatus={$taskStatus}>
                    <p>{taskText}</p>
                    <p>{taskDuration}</p>
                    <p>{taskBeginning}</p>
                    <p>{$taskStatus}</p>
                    <button onClick={() => handleRemoveCycle(id)}><i className="fa-solid fa-trash"></i></button>
                </SingleTaskStyle>
            }
        </>
    )
}