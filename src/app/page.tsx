import Navigation from './components/navigation/navigation';
import NavPanel from './components/navigation/navpanel';
import Clock from './components/panels/clock';

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
                    }
                ]}>
                <NavPanel keyId='clock'>
                    <Clock></Clock>
                </NavPanel>
                <NavPanel keyId='stopwatch'>Stopwatch</NavPanel>
                <NavPanel keyId='timer'>Timer</NavPanel>
                <NavPanel keyId='alarms'>Alarms</NavPanel>
            </Navigation>
        </main>
    );
};

export default Home;
