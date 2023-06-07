import { useEffect, useState } from 'react';
import { PT_Mono } from 'next/font/google';
import styles from './styles.module.css';
import { Time } from '@/app/time';
import Button, { Buttons } from '../form/button';
import { useShortcut } from '@/app/useShortcut';

const pt_mono = PT_Mono({ weight: '400', subsets: ['latin'] });

const Stopwatch = ({}: {}) => {
    const [miliseconds, setMiliseconds] = useState(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);

    const reset = () => {
        setIsRunning(false);
        setMiliseconds(0);
    };

    useShortcut(' ', () => setIsRunning(!isRunning));
    useShortcut('r', reset);

    useEffect(() => {
        const interval = setInterval(() => {
            setMiliseconds(prevMilliseconds => prevMilliseconds + 10);
        }, 10);

        if (!isRunning) clearInterval(interval);

        return () => clearInterval(interval);
    }, [isRunning]);

    const format = () => {
        const minutes = Time.formatItem(Math.floor((miliseconds / 60000) % 60));
        const seconds = Time.formatItem(Math.floor((miliseconds / 1000) % 60));
        const ms = Time.formatItem((miliseconds / 10) % 100);

        return `${minutes}:${seconds}:${ms}`;
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
                <Button label='Reset' onClick={reset} />
            </Buttons>
        </>
    );
};

export default Stopwatch;
