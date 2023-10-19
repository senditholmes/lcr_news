import React, { useState } from 'react';

// GLOBALS
const API_KEY = 'apiKey=1a51b6470bff4c499d81bd67ecd99010';

//COMPONENT
export default function Titlecard() {
    //STATE DEFS
    const [userInput, setUserInput] = useState('');
    //HANDLERS
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput(event.target.value);
      };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            getArticle()
        } else {
            return
        }
    }


    //API ASYNC FUNCTION
    async function getArticle() {
        const url = 'https://newsapi.org/v2/top-headlines?' + 'q=' + userInput + '&' + API_KEY;
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            return data;
        } catch (error) {
            console.log('Unable to connect to API')
        }
    }

    // XTML
    return (
        <>
            <input
                name='search-bar'
                className='topic-box'
                type="text"
                value={userInput}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="What should we discuss today?"
            />
            <h1>
                {userInput}
            </h1>
        </>
    )
}





