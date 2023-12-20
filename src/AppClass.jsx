import React from 'react';
import Counter from './components/Counter';

export default class AppClass extends React.Component{
    state = {total: 0};

    onClick = () => {
        this.setState((current) =>({total : current.total + 1}))
    }
 
    componentDidMount(){
        console.log("component mount")
    } 


    render(){
        const {total} = this.state;
        return (
        <div className='container'>
            <div className='banner'>
            </div>
            {/* 다음과 같이 onClick 속성을 담은 함수를 props로 전달 가능 */}
            <div className='banner_button'>
                <Counter total = {total} onClick = {this.onClick} />
                <Counter total = {total} onClick = {this.onClick} />
            </div>
        </div>
        );}
}