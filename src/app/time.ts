export interface TimeFilter {
    seconds?: boolean;
    minutes?: boolean;
    hours?: boolean;
}

export type TimeData = { [key in keyof TimeFilter]?: number };

// The intervals in miliseconds
export const SECONDS_INTERVAL = 10 ** 3,
    MINUTES_INTERVAL = 10 ** 6,
    HOURS_INTERVAL = 10 ** 9;

/**
 *  Utility class for time management
 */
export class Time {
    /**
     * Creates and returns a ```Date``` object
     * @returns The created ```Date``` object
     */
    public static getDate() {
        return new Date();
    }

    /**
     * Returns the current time in ```TimeData``` format
     * @param filter The requested data (seconds, minutes and hours)
     * @returns The timedata object
     */
    public static getTime(filter?: TimeFilter): TimeData {
        const date = this.getDate();

        if (filter) {
            let object: TimeData = {};

            if (filter.seconds) object['seconds'] = date.getSeconds();
            if (filter.minutes) object['minutes'] = date.getMinutes();
            if (filter.hours) object['hours'] = date.getHours();

            return object;
        } else {
            return this.getTime({
                seconds: true,
                minutes: true,
                hours: true
            });
        }
    }

    /**
     * Subscribe to an event which fires every second
     * @param callback
     */
    public static onSecondsUpdate(callback: (time: TimeData) => any) {
        setTimeout(() => {
            setInterval(() => callback(this.getTime()), SECONDS_INTERVAL);
        }, 1000 - new Date().getMilliseconds());
    }

    /**
     * Subscribe to an event which fires every minute
     * @param callback
     */
    public static onMinuteUpdate(callback: (time: TimeData) => any) {
        setTimeout(() => {
            setInterval(() => callback(this.getTime()), MINUTES_INTERVAL);

            // Wait for the next minute to start before setting the interval
            // e.g. the time is 07:38:21 it will wait 60 - 21 seconds
        }, (60 - new Date().getSeconds()) * MINUTES_INTERVAL);
    }

    /**
     * Subscribe to an event which fires every hour
     * @param callback
     */
    public static onHourUpdate(callback: (time: TimeData) => any) {
        setTimeout(() => {
            setInterval(() => callback(this.getTime()), HOURS_INTERVAL);

            // Wait for the next hour to start before setting the interval
            // e.g. the time is 07:38 it will wait 60 - 38 minutes
        }, (60 - new Date().getMinutes()) * HOURS_INTERVAL);
    }

    /**
     * Formats the timeData
     * @param timeData The timeData to format
     * @returns The formatted time e.g. 07:47:00
     */
    public static formatTimeData(timeData: TimeData) {
        let formatted = '';

        if (timeData.hours) formatted += timeData.hours;

        if (timeData.minutes) formatted += `:${timeData.minutes}`;

        if (timeData.seconds) formatted += `:${timeData.seconds}`;

        return formatted;
    }
}
