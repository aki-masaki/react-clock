'use client';

import { Time, TimeData } from '@/app/time';
import { useState } from 'react';

const Clock = ({}: {}) => {
    const [timeData, setTimeData] = useState<TimeData>();

    Time.onSecondsUpdate(setTimeData);

    return (
        <>
            {!!timeData && (
                <span>{Time.formatTimeData(timeData as TimeData)}</span>
            )}
        </>
    );
};

export default Clock;
