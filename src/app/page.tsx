import Navigation from './components/navigation/navigation';
import NavPanel from './components/navigation/navpanel';
import Clock from './components/panels/clock';
import Settings from './components/panels/settings';

const Home = () => {
    return (
        <main>
            <Navigation
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
                    <Clock settings={{ use24HourFormat: false }}></Clock>
                </NavPanel>

                <NavPanel keyId='stopwatch'>Stopwatch</NavPanel>
                <NavPanel keyId='timer'>Timer</NavPanel>
                <NavPanel keyId='alarms'>Alarms</NavPanel>
                <NavPanel keyId='settings'>
                    <Settings />
                </NavPanel>
            </Navigation>
        </main>
    );
};

export default Home;
