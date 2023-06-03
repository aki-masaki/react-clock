'use client';

import React from 'react';
import styles from './styles.module.css';
import formStyles from '../form/styles.module.css';
import { CheckBox, Select, Label, Link } from '../form';

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
                    }
                ]}
                onChange={(id, activeOptionId) =>
                    onSettingChange(id, activeOptionId)
                }
                defaultValue={settings.defaultTab}
            />
            <Label text='React Clock' big />
            <Label text='This is a clock built in next.js and react' />
            <Label text='Icons from Bootstrap Icons' />
            <Link
                href='https://icons.getbootstrap.com/'
                label='Bootstrap Icons'
            />
            <Label text='Fonts from Google Fonts [Montserrat and PT_mono]' />
            <Link href='https://fonts.google.com/' label='Google Fonts' />

            <Link
                href='https://github.com/NikiStefan2/react-clock'
                label='Github'
                id={formStyles['github-link']}
            />
        </div>
    );
};

export default SettingsPanel;
