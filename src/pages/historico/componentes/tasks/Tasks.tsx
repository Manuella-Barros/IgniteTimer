import { SingleTask, StatusType } from "../singleTask/SingleTask";
import { TaskStyle } from "../../HistoricoStyle.styles"; 
import { useContext } from "react";
import { CyclesContext } from "../../../../contexts/CyclesContext";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export function Tasks(){
    const { cycles } = useContext(CyclesContext);

    return (
        <TaskStyle>
            {
                cycles.map(cycle => {
                    let status: StatusType;
                    if(cycle.finishDate){
                        status = 'Concluído'
                    } else if(cycle.interruptDate){
                        status = 'Interrompido'
                    } else {
                        status = 'Em andamento'
                    }

                    return <SingleTask 
                            key={cycle.id} 
                            id={cycle.id}
                            typeStyle={'task'} 
                            taskText={cycle.taskName} 
                            taskDuration={`${cycle.taskMinutes} minutos`} 
                            taskBeginning={
                                formatDistanceToNow(new Date(cycle.startDate), {
                                    addSuffix: true,
                                    locale: ptBR,
                                })
                            } 
                            $taskStatus={status}
                        />
                })
            }
        </TaskStyle>
    )
}