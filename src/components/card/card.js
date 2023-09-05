import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import './card.css'
import styled from 'styled-components';


export function ToDoCard (){

    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState('');
   

    function addTask(){
        setTaskList([...taskList, task]);
        console.log(taskList)
        setTask('')
    }

    function excludeTask(i){
        setTaskList(taskList.filter((task, index) => index !== i))
        console.log(taskList)
    }

    function taskReady(i){
        taskList.map((task, index) =>
           task == taskList[i] ? 
           taskList[i] = 'line-thorough'
           : 'none'           
        );
    }

    function renderItem (){
        return(
        taskList.map((task, i) => 
           <div className='item-container' key={i}>
               <div className='item'> {task} </div>
               <button className='done-button' onClick={() => taskReady(i)}><svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
               <button className='exclude-button' onClick={() => excludeTask(i)}> <FontAwesomeIcon icon={faTrash} /> </button>
           </div> 
       ))
   }
    return(
        <div className='main-card'>
             <h4>List Here:</h4>
            <div className='list-card'>
                <div className='list'>
                   {renderItem()}
               </div>
            </div>
            <div className='input-area'>
                <input value={task} onChange={(e) => setTask(e.target.value)} ></input>
                <button onClick={addTask} className='add-bnt'>+New Task</button>
            </div>

            
        </div>
    )
    


}



//a ideia é acionar o botao e aparecer uma linha com um texto padrao editavel 