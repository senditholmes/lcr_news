import { useState } from "react";

type biasList = 'Left' | 'Right' | 'Center';
  
const Newscard = () => {
    const [isBias, setBias] = useState<biasList>('Center');
    function toggleBias(newBiasValue: biasList) {
        setBias(newBiasValue);
    }

    return (
    <>
        <div className='button-container'>
            <button id='toggle-left' onClick={() => toggleBias('Left')}>Left</button>
            <button id='toggle-center'onClick={() => toggleBias('Center')}>Centrist</button>
            <button id='toggle-right'onClick={() => toggleBias('Right')}>Right</button>
            
        </div>

        <div id='card-title'>
            <h2>{isBias}</h2>
        </div>

        <div className='news-card'>
            <p>

            </p>
        </div>
    </>
    );
};


export default Newscard;