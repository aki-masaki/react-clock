import { useEffect, useState } from 'react';
import { PT_Mono } from 'next/font/google';
import styles from './styles.module.css';
import { Time } from '@/app/time';
import Button, { Buttons } from '../form/button';

const pt_mono = PT_Mono({ weight: '400', subsets: ['latin'] });

const Timer = ({}: {}) => {
    const [seconds, setSeconds] = useState(10);
    const [minutes, setMinutes] = useState(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);

    const clamp = (value: number, min: number, max: number) => {
        if (value > max) return max;
        else if (value < min) return min;
        else return value;
    };

    useEffect(() => {
        const interval = setInterval(() => {
            // In the next interval it will be 0 so decrease one minute or reset it
            if (seconds === 0) {
                if (minutes > 0) {
                    setMinutes(prev => prev - 1);
                    setSeconds(59);
                    return;
                } else {
                    setIsRunning(false);
                    return;
                }
            } else if (seconds === 60) {
                if (minutes <= 59) {
                    setMinutes(prev => prev + 1);
                    return;
                } else return;
            }

            setSeconds(prevSeconds => prevSeconds - 1);
        }, 1000);

        if (!isRunning) clearInterval(interval);

        return () => clearInterval(interval);
    }, [isRunning, seconds, minutes]);

    const format = () => {
        return `${Time.formatItem(minutes)}:${Time.formatItem(seconds)}`;
    };

    return (
        <>
            <span className={`${styles.time} ${pt_mono.className}`}>
                {format()}
            </span>

            <Buttons>
                <Button
                    label='Start'
                    primary
                    onClick={() => setIsRunning(true)}
                />
                <Button label='Stop' onClick={() => setIsRunning(false)} />
                <Button
                    label='Reset'
                    onClick={() => {
                        setIsRunning(false);
                        setSeconds(0);
                        setMinutes(0);
                    }}
                />
            </Buttons>

            <Buttons>
                <Button
                    label='Minutes +'
                    onClick={() =>
                        !isRunning &&
                        setMinutes(prevMinutes => clamp(prevMinutes + 1, 0, 60))
                    }
                />
                <Button
                    label='Minutes -'
                    onClick={() =>
                        !isRunning &&
                        setMinutes(prevMinutes => clamp(prevMinutes - 1, 0, 60))
                    }
                />
            </Buttons>

            <Buttons>
                <Button
                    label='Seconds +'
                    onClick={() =>
                        !isRunning &&
                        setSeconds(prevSeconds => clamp(prevSeconds + 1, 0, 60))
                    }
                />
                <Button
                    label='Seconds -'
                    onClick={() =>
                        !isRunning &&
                        setSeconds(prevSeconds => clamp(prevSeconds - 1, 0, 60))
                    }
                />
            </Buttons>
        </>
    );
};

export default Timer;
