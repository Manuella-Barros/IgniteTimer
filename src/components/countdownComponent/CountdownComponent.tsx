import { useEffect, useContext } from 'react';
import { differenceInSeconds } from 'date-fns'
import { CountdownStyle } from '../../pages/home/HomeStyle.styles';
import { CyclesContext } from '../../contexts/CyclesContext';

function CountdownComponent(){
    const { activeCycle, markCycleAsFinished, secondsPassed, handleSecondsPassed } = useContext(CyclesContext);

    let totalSeconds = activeCycle? activeCycle.taskMinutes*60 : 0;

    useEffect(() => {
        let interval: number;
        if(activeCycle) {
            interval = setInterval(() => {
                const secondsDifference: number = differenceInSeconds(
                        new Date(), 
                        new Date(activeCycle.startDate)
                    )

                if(secondsDifference >= totalSeconds){
                    markCycleAsFinished();
                    clearInterval(interval);
                    document.title = 'Ignite Timer';
                    handleSecondsPassed(totalSeconds);
                } else {
                    handleSecondsPassed(secondsDifference);
                }
            }, 1000)
        }

        return () => {
            clearInterval(interval)
        }
    }, [activeCycle])

    let leftSeconds = activeCycle ? totalSeconds - secondsPassed : 0;
    let minutes = (Math.floor(leftSeconds/60).toString()).padStart(2, '0')
    let seconds = ((leftSeconds%60).toString()).padStart(2, '0')

    useEffect(() => {
        if(activeCycle){
            document.title = `${minutes}:${seconds}`;
        }
    }, [minutes, seconds, activeCycle])

    return (
        <CountdownStyle>
            <p className="timer">{minutes[0]}</p>
            <p className="timer">{minutes[1]}</p>
            <p className="separator">:</p>
            <p className="timer">{seconds[0]}</p>
            <p className="timer">{seconds[1]}</p>
        </CountdownStyle>
    )
}

export default CountdownComponent;