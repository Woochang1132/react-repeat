import React, { useEffect, useState } from 'react';
// data 가겨오는 로직을 다른 component에서도 많이 사용한다면 
// fetch 및 axios 로직이 중복된다.
// custom hook 내부적으로 가지고 있는 요소를 바탕으로 한다.
// useState를 쓰고 유사하지만 return UI 하는 js 요소가 없다.
export default function useProducts({salesOnly}) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setLoading(true);
        setError(undefined);
        fetch(`data/${salesOnly ? 'sale_' : ''}products.json`)
        .then(res => res.json())
        .then((data) => {
            console.log("데이터를 네트워크에서 가져옴", data)
            setProducts(data)
        })
        .catch((e) => setError('에러가 발생했음!'))
        .finally(() => setLoading(false));
        return () => {
            console.log("메모리 청소를 위한 과정")
        }
    },[salesOnly])

    return [loading, error, products]
}

