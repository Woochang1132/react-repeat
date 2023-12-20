import React, { useState } from 'react';
import './AppCounter.module.css'


// 목적, 클릭 이벤트의 결과를 실시간으로 반영할 수 있도록(reRender 개념 복습하기)
export default function AppCounter() {
    const [count, setCount] = useState(0);
    const clickCount = () => {
        setCount((current) => current + 1)
    }

    return (
        <div className='counter_container'>
            <div className='counter_count'>
                <h1>{`counter : ${count}`}</h1>
            </div>

        <button onClick={clickCount}>click</button>
        </div>
    );
}

