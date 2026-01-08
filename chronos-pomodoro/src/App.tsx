import { Heading } from './components/Heading';

import './styles/global.css';
import './styles/theme.css';

export function App() {
    console.log('oi')

    return (
        <>
            <Heading attr={123} attr2='String'>
                Olá mundo!
            </Heading>

            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, similique mollitia! Expedita officiis quasi debitis iure dolor recusandae magnam adipisci quaerat et nesciunt nihil ad eius repellendus corporis, dolorem qui?</p>
        </>
    )
}
