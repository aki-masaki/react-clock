'use client';

import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { CheckBox } from '../form/check-box';
import { Label } from '../form/label';
import { Select } from '../form/select';

export interface Settings {
    use24: boolean;
    defaultTab: string;
}

const SettingsPanel = ({
    settings,
    onSettingChange
}: {
    settings: Settings;
    onSettingChange(id: string, value: any): any;
}) => {
    return (
        <div className={`${styles.container} ${styles['settings-container']}`}>
            <CheckBox
                label='Use 24 hour format'
                id='use24'
                defaultValue={settings.use24}
                onChange={(id, state) =>
                    onSettingChange && onSettingChange(id, state)
                }
            />
            <Label text='Default Tab' />
            <Select
                id='defaultTab'
                options={[
                    {
                        id: 'clock',
                        label: 'Clock'
                    },
                    {
                        id: 'stopwatch',
                        label: 'Stopwatch'
                    },
                    {
                        id: 'timer',
                        label: 'Timer'
                    },
                    {
                        id: 'alarms',
                        label: 'Alarms'
                    }
                ]}
                onChange={(id, activeOptionId) =>
                    onSettingChange(id, activeOptionId)
                }
                defaultValue={settings.defaultTab}
            />
        </div>
    );
};

export default SettingsPanel;
