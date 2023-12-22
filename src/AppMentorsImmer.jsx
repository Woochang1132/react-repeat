import React, { useState } from 'react';
import {useImmer} from 'use-immer'

export default function AppMentorsImmer() {
    const [person, updatePerson] = useImmer(initialPerson);

    const handleUpdate = () => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        updatePerson((person) => {
            // 만족하는 첫번째 요소를 반환한다.
            const mentor = person.mentors.find((member) => member.name === prev)
            console.log("mentor change >>" , mentor)
            mentor.name = current;
        })
    }
    const handleAdd = () => {
        const name = prompt(`추가할 멘토의 이름을 작성해주세요`);
        const title = prompt(`추가할 내용을 작성해주세요`);
        updatePerson((person) => {
            person.mentors.push({name, title});
        })
    }

    const handleDelete = () => {
        const name = prompt(`삭제할 멘토의 이름을 작성해주세요`);
        updatePerson((person) => {
          const index = person.mentors.findIndex((member) => member.name === name);
            person.mentors.splice(index,1);
        })
    }
    
    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <ul>
                {person.mentors.map((mentor, index) => (
                    <li key={index}>{mentor.name} {mentor.title}</li>
                ))}
            </ul>
            <button onClick={handleUpdate}>
            멘토 이름 바꾸기
            </button>     

            <button onClick={handleAdd}>
             멘토 추가하기
            </button>   

            <button onClick={handleDelete}>
             멘토 삭제하기
            </button>   
        </div>
    );
}

const initialPerson = {
    name: '우창',
    title: '개발자',
    mentors: 
    [
        {
            name: '밥',
            title: '시니어 개발자'
        },
        {
            name : '제임스',
            title : '시니어 개발자'
        }
    ]
}