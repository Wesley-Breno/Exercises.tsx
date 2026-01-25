import { PlayCircleIcon } from 'lucide-react';
import { useState } from 'react';

import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { DefaultInput } from './components/DefaultInput';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Heading } from './components/Heading';
import { Footer } from './components/Footer';

import './styles/global.css';
import './styles/theme.css';

export function App() {
 
    const [numero, setNumero] = useState(() => {
        console.log('Lazy initialization')
        return 0
    })
    
    function handleClick() {
        setNumero(prevState => prevState+1)
    }

    return (
        <>
            <Heading>Numero: <span id='numero'>{numero}</span></Heading>
            <button onClick={handleClick}>Aumenta</button>

            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>

            <Container>
                <CountDown />
            </Container>

            <Container>
                <form className='form' action="">
                    <div className="formRow">
                        <DefaultInput 
                            id='meuInput' 
                            type="text" 
                            labelText={numero.toString()}
                            placeholder='Digite algo'
                        />
                    </div>

                    <div className="formRow">
                        <p>
                            Lorem ipsum dolor sit amet consectetur
                        </p>
                    </div>


                    <div className="formRow">
                        <Cycles/>
                    </div>

                    <div className="formRow">
                        <DefaultButton icon={<PlayCircleIcon/>} color='green'/>
                    </div>
                </form>
            </Container>

            <Container>
                <Footer />
            </Container>
        </>
    )
}
