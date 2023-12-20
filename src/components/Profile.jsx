import React from 'react';
import Avatar from './Avatar';

export default function Profile({ name, title, isTrue}) {
    return (
          <div className='profile'>
            <Avatar 
            url='https://images.unsplash.com/photo-1702517207949-a02e0cbc695d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            isTrue="true"/>
            <h1>{name}</h1>
            <p>{title}</p>
          </div>
    );
}

