import { useFormContext } from 'react-hook-form';
import { CyclesContext } from '../../contexts/CyclesContext';
import { useContext } from 'react';
import { FormStyle } from "../../pages/home/HomeStyle.styles";

function FormComponent(){
    const { activeCycle } = useContext(CyclesContext);
    const { register } = useFormContext();

    return(
        <FormStyle>
            <h3>Vou trabalhar em </h3>
            <input type="text" list="tarefas" placeholder=" de um nome para o projeto " {...register('taskName')} disabled={!!activeCycle}/>
            <datalist id="tarefas">              
                <option value="Estudar"/>
                <option value="Jogar"/>
            </datalist>
        
            <h3> durante </h3>
            <section>
                <input type="button" value="+" />
                <input type="number" placeholder="00" min="1" max="60" {...register('taskMinutes', {valueAsNumber: true})} disabled={!!activeCycle}/>
                <input type="button" value="-" />
            </section>
            <h3> minutos.</h3>
        </FormStyle>
    )
}

export default FormComponent;