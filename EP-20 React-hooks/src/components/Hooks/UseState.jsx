import React from 'react';
import { useState } from 'react';

const UseState = () => {

    const [Count, setCount] = useState(0);

    const handleBtn=()=>{
        setCount(Count+1);
    }

    return (
        <>
            <section className='main-div'>
                <h1>{Count}</h1>
                <button onClick={handleBtn}>increment</button>
            </section>
        </>
    )
}

export default UseState