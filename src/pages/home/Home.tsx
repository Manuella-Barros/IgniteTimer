import FormComponent from '../../components/formComponent/FormComponent';
import CountdownComponent from '../../components/countdownComponent/CountdownComponent';
import * as Zod from 'zod';
import { FormProvider, useForm } from 'react-hook-form'
import { CyclesContext } from '../../contexts/CyclesContext';
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from 'react';
import { HomeStyle } from "./HomeStyle.styles";
import { Button } from './componentes/button/Button';

type dataProps = Zod.infer <typeof formValidationSchema>; 
const formValidationSchema = Zod.object({
    taskName: Zod.string(),
    taskMinutes: Zod.number().min(1).max(60),
})

export function Home(){
    const { createCycle, activeCycle, interruptCycle} = useContext(CyclesContext);

    //Guarda funções vindas do useForm
    //Register é o useRef, pega o valor do input
    //handleSubmit função que recebe uma função
    //watch é a função on change
    //reset volta para os valores originais
    const newCycleForm = useForm({
        resolver: zodResolver(formValidationSchema),
        defaultValues: {
            taskName: "",
            taskMinutes: 0
        }
    });
    const { handleSubmit, watch, reset } = newCycleForm;
    
    function handleCreateCycle(data: dataProps){
        createCycle(data);
        reset();
    }

    let disableButton = (watch('taskName') != '' && watch('taskMinutes') >= 1) 
        ? false : true;

    return(
        <HomeStyle>
            <form onSubmit={handleSubmit(handleCreateCycle)}>
                <FormProvider {...newCycleForm}> 
                    <FormComponent/>
                </FormProvider>
                <CountdownComponent/>

                <article>
                    {
                        !activeCycle && 
                        <Button $typeStyle={'start'} type={'submit'} disabled={disableButton}>
                            <i className="fa-solid fa-play"></i> Começar
                        </Button>
                    }    
                    {
                        activeCycle && 
                        <Button $typeStyle={'end'} type={'submit'} onClick={interruptCycle}>
                            <i className="fa-solid fa-hand"></i> Interromper
                        </Button>                   
                    }            
                </article>
            </form>
        </HomeStyle>
    )
}