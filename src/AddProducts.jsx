import React, { useState } from 'react';

export default function AddProducts() {
    const [showProducts, setShowProducts] = useState(true);
    return (
        <div>
            <button onClick={() => setShowProducts((show) => !show)}>Toggle</button>        
        </div>
    );
}

