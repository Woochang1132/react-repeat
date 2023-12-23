import React, { useState } from 'react';
import useProducts from '../hooks/use-products';

export default function Products() {
    //custom hooks => data를 가져오는 부분을 정리함, products 정보는 받아 오게 구성
    const [count,setCount] = useState(0);
    const [checked, setChecked] = useState(false);
    const handleChange = () => setChecked(prev => !prev);
    const [loading, error, products] = useProducts({salesOnly : checked});
    
    if(loading) return <p>Loading...</p>

    if(error) return <p>{error}</p>
    return (
        <>
            <input id='checkobx' type="checkbox" value={checked} onChange={handleChange}/>
            <label htmlFor='checkbox'>show Only hot sale</label>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <article>
                            <h3>
                                {product.name}
                                {product.price}
                            </h3>
                        </article>
                    </li>
                ))}
            </ul>
            <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
        </>
    );
}

