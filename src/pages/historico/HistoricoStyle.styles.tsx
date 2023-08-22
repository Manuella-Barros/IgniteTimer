import { styled } from "styled-components";
import { StatusType } from "./componentes/singleTask/SingleTask";

export const HistoricoStyle = styled.main`
    @media(max-width: 900px){
        overflow: scroll;
    }
`

export const TaskStyle = styled.article`
    height: 42vh;

    &::-webkit-scrollbar{
        display: none;
    }
`

const BaseTasksStyle = styled.section`
    display: flex;
    width: 100%;
    margin-top: 8px;
    padding-block: ${({theme}) => theme["escala-m"]};
    padding-inline: ${({theme}) => theme["escala-pp"]};

    p:nth-child(1){
        width: 600px;
    }
    p{
        width: 180px;
    }
    
    @media(max-width: 900px){
        width: 600px;
        p:nth-child(1){
            width: 500px;
        }
        p{
            width: 190px;
        }
    }
`

export const TasksHeader = styled(BaseTasksStyle)`
    background-color: ${({theme}) => theme["neutral-color-6"]};
    border-radius: 10px 10px 0px 0px;
    font-weight: bold;
`

interface SingleTasksStyleProps {
    $taskStatus: StatusType;
}

const statusColor = {
    'Em andamento': 'third-color-1',
    'Interrompido': 'second-color-1',
    'Concluído': 'first-color-1',
}

export const SingleTaskStyle = styled(BaseTasksStyle)<SingleTasksStyleProps>`
    background-color: ${({theme}) => theme["neutral-color-7"]};

    p:nth-child(4)::before{
        content: "";
        margin-right: 10px;
        padding-block: 0px;
        border-radius: 10px;
        padding-inline: 8px;
        
        background-color: ${({theme, $taskStatus}) => {
            return theme[statusColor[$taskStatus]];
        }};
    }

    button{
        color: ${({theme}) => theme["second-color-2"]};
        padding: 0;

        :hover{
            color: ${({theme}) => theme["second-color-1"]};
        }
    }
`

export const NoTaskStyle = styled.section`
    height: 42vh;
    line-height: 42vh;
    background-color: ${({theme}) => theme["neutral-color-7"]};
    text-align: center;

    @media(max-width: 900px){
        width: 178.5%;
    }
`