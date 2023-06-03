'use client';

import { useEffect, useState } from 'react';
import Navigation from './components/navigation/navigation';
import NavPanel from './components/navigation/navpanel';
import Clock from './components/panels/clock';
import SettingsPanel, { Settings } from './components/panels/settings-panel';
import Stopwatch from './components/panels/stopwatch';

const Home = () => {
    const [settings, setSettings] = useState<Settings>((() => {
        let result: string | Settings;

        if ((result = localStorage.getItem('settings') as string))
            result = JSON.parse(result);
        else
            result = {
                use24: true,
                defaultTab: 'clock'
            } as Settings;

        return result;
    }) as () => Settings);

    useEffect(() => {
        const localSettings = localStorage.getItem('settings');

        if (localSettings) setSettings(JSON.parse(localSettings));
        else localStorage.setItem('settings', JSON.stringify(settings));

        // We only want to execute this once
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main>
            <Navigation
                defaultKeyId={settings.defaultTab}
                keys={[
                    { id: 'clock', displayName: 'Clock', iconClass: 'clock' },
                    {
                        id: 'stopwatch',
                        displayName: 'Stopwatch',
                        iconClass: 'stopwatch'
                    },
                    {
                        id: 'timer',
                        displayName: 'Timer',
                        iconClass: 'hourglass'
                    },
                    {
                        id: 'alarms',
                        displayName: 'Alarms',
                        iconClass: 'alarm'
                    },
                    {
                        id: 'settings',
                        displayName: 'Settings',
                        iconClass: 'gear'
                    }
                ]}>
                <NavPanel keyId='clock'>
                    <Clock
                        settings={{ use24HourFormat: settings.use24 }}></Clock>
                </NavPanel>

                <NavPanel keyId='stopwatch'>
                    <Stopwatch />
                </NavPanel>
                <NavPanel keyId='timer'>Timer</NavPanel>
                <NavPanel keyId='alarms'>Alarms</NavPanel>
                <NavPanel keyId='settings'>
                    <SettingsPanel
                        settings={settings}
                        onSettingChange={(id, value) => {
                            let updatedSettings: {
                                [key in keyof Settings as string]: any;
                            } = settings;

                            updatedSettings[id] = value;

                            setSettings(updatedSettings as Settings);

                            // Every time settings change, save it to localstorage
                            localStorage.setItem(
                                'settings',
                                JSON.stringify(settings)
                            );
                        }}
                    />
                </NavPanel>
            </Navigation>
        </main>
    );
};

export default Home;
