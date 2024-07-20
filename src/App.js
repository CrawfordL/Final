import React, { useState } from 'react';
import Greeting from './components/Greeting';
import Button from './components/Button';
import TextFields from './components/TextField';
import DrawingTool from './components/Graphic';

function App() {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('');

    const handleInputChange = (event) => {
        const inputName = event.target.value;

        setName(inputName);
    };

    return (
        <div>
            <Greeting />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                <div style={{ float: 'left', marginLeft: '20px' }}>
                    <Button name="Add" action="add" counter={counter} setCounter={setCounter} />
                    <Button name="Subtract" action="subtract" counter={counter} setCounter={setCounter} />
                    <Button name="Reset" action="reset" counter={counter} setCounter={setCounter} />
                    <div style={{ marginTop: '20px' }}>
                        <p>Counter: {counter}</p>
                    </div>
                </div>
                <div style={{ float: 'right', marginRight: '20px' }}>
                    <TextFields prompt="Enter your name:" value={name} onChange={handleInputChange} />
                </div>
            </div>
            <div className="App">
                <DrawingTool />
            </div>
        </div>
    );
}

export default App;