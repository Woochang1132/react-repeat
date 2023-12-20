import React from "react";
import Profile from './components/Profile';
import "./App.css";

export default function AppProfile() {
  return <div>
    <Profile 
    url='https://images.unsplash.com/photo-1702517207949-a02e0cbc695d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    name="James Kim"
    title="경기 시작 전"
    isTure = "true"
    />
  </div>;
}
