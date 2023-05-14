import React, {useState} from "react";
import {ButtonNameType} from "./App";


type TodolistPropsType = {
    track1: string;
    tasks: TaskType[]
    removeTask: (taskId: number)=> void
    filterTask: (buttonName: ButtonNameType)=> void

}

type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

const Todolist = (props: TodolistPropsType) => {




    return (
        <div>
            <h3>{props.track1} </h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map(el => {
                    return (
                        <li key={el.id}>
                            <button onClick={()=>
                                props.removeTask(el.id)}>X</button>
                            <input type="checkbox" checked={el.isDone}/> <span>{el.title}</span>
                        </li>
                    )
                })}

            </ul>
            <div>
                <button onClick={()=> props.filterTask('All')}>All</button>
                <button onClick={()=> props.filterTask('Active')}>Active</button>
                <button onClick={()=> props.filterTask('Completed')}>Completed</button>
            </div>
        </div>

    )
}

export default Todolist;