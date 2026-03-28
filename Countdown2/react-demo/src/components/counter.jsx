import './../App.css'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        setCount(count - 1);
    }

    return(
        <>
        <div>{count}</div>
        <button onClick={() => increaseCount()}>increase</button>
        <button onClick={() => decreaseCount()}>decrease</button>
        </>
    )
}

export default Counter;