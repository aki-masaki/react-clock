'use client';

import { Time, TimeData } from '@/app/time';
import { useState } from 'react';
import styles from './styles.module.css';
import { PT_Mono } from 'next/font/google';
import LoadingIcon from '../loading-icon';

const pt_mono = PT_Mono({ weight: '400', subsets: ['latin'] });

const Clock = ({ settings }: { settings: { use24HourFormat: boolean } }) => {
    const [timeData, setTimeData] = useState<TimeData>();

    Time.onSecondsUpdate(setTimeData);

    return (
        <>
            {!!timeData ? (
                <span className={`${styles.clock} ${pt_mono.className}`}>
                    {Time.formatTimeData(timeData, {
                        use24HourFormat: settings.use24HourFormat
                    })}
                </span>
            ) : (
                <LoadingIcon />
            )}
        </>
    );
};

export default Clock;
