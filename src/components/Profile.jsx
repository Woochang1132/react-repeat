import React from 'react';

export default function Profile({url, name, title, isTrue}) {
    return (
          <div className='profile'>
            <img className='profile__img' 
            src={url} 
            alt="profile" 
            />
            {/* {isTrue ? null : <p className='new'>new</p>} */}
            {isTrue && <p className='new'>new</p>}
            <h1>{name}</h1>
            <p>{title}</p>
          </div>
    );
}

