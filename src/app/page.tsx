'use client';

import { useEffect, useState } from 'react';
import { Navigation, NavPanel } from './components/navigation';
import {
    Clock,
    Stopwatch,
    Timer,
    SettingsPanel,
    Settings
} from './components/panels';
import Head from 'next/head';

const Home = () => {
    const [settings, setSettings] = useState<Settings>({
        defaultTab: 'clock',
        use24: true
    });

    const [title, setTitle] = useState(settings.defaultTab);

    useEffect(() => {
        document.title = title;
    }, [title]);

    useEffect(() => {
        const localSettings = localStorage.getItem('settings');

        if (localSettings) setSettings(JSON.parse(localSettings));
        else localStorage.setItem('settings', JSON.stringify(settings));

        // We only want to execute this once
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main>
            <Head>
                <title>{title}</title>
            </Head>

            <Navigation
                onChange={key => setTitle(key.displayName)}
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
                        id: 'settings',
                        displayName: 'Settings',
                        iconClass: 'gear'
                    }
                ]}>
                <NavPanel keyId='clock'>
                    <Clock
                        settings={{
                            use24HourFormat: settings.use24
                        }}></Clock>
                </NavPanel>

                <NavPanel keyId='stopwatch'>
                    <Stopwatch />
                </NavPanel>
                <NavPanel keyId='timer'>
                    <Timer />
                </NavPanel>
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
