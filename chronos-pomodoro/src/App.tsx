import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';

import './styles/global.css';
import './styles/theme.css';

export function App() {
    return (
        <>
            <Heading>
                Olá mundo!
                <button>
                    <TimerIcon />
                </button>
            </Heading>
        </>
    )
}
