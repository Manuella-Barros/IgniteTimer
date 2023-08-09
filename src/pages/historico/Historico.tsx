import { useContext } from "react";
import { HistoricoStyle } from "./HistoricoStyle.styles";
import NoTasks from "./componentes/noTasks/NoTasks";
import { SingleTask } from "./componentes/singleTask/SingleTask";
import { Tasks } from "./componentes/tasks/Tasks";
import { CyclesContext } from "../../contexts/CyclesContext";

export function Historico(){
    const { cycles } = useContext(CyclesContext);

    return (
        <HistoricoStyle>
            <h1>Meu Histórico</h1>
            <SingleTask typeStyle={'header'} taskText={'Tarefa'} taskDuration={'Duração'} taskBeginning={'Inicio'}/>
            
            {
                cycles.length == 0 && <NoTasks/>
            }
            {
                cycles.length > 0 && <Tasks/>
            }
            
        </HistoricoStyle>
    )
}