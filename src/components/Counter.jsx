import React, { useState } from 'react';

export default function Counter({total ,onClick}) {
    const [count, setCount] = useState(0);
    return (
        <>
        <p>{`별도의 counter : ${count}/${total}`}</p>
        
          <button onClick={() => {
            setCount((current) => current + 1)
            onClick(); // 전달 받은 props 바로 사용 가능
          }}>add+
          </button>   
        </>
    );
}

