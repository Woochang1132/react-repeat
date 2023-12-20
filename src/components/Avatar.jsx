import React from 'react';

export default function Avatar({url, isTrue}) {
    return (
        <div className='avatar'>            
        <img className='profile__img' 
            src={url} 
            alt="profile" 
            />
            {isTrue && <p className='new'>new</p>}
        </div>

    );
}

