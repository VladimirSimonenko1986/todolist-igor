import React, {useState} from 'react';
import './App.css';
import Todolist from "./Todolist";


export type ButtonNameType = 'All' | 'Active' | 'Completed'

function App() {


    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Angular", isDone: false}

    ])

    const [filteredTask, setFilteredTasks] = useState<ButtonNameType>('All')

    const removeTask = (taskId: number) => {
        // tasks = tasks.filter(el=> el.id !== taskId)
        // setTasks(tasks)
        setTasks(tasks.filter(el => el.id !== taskId))
    }


    let tasksAfterFilter = tasks;

    if (filteredTask === 'Active') {
        tasksAfterFilter = tasks.filter(el => !el.isDone)
    }
    if (filteredTask === 'Completed') {
        tasksAfterFilter = tasks.filter(el => el.isDone)
    }


    const filterTask = (filteredTask: ButtonNameType) => {
        setFilteredTasks(filteredTask);
    }


    return (
        <div className="App">
            <Todolist track1={'What to learn'}
                      tasks={tasksAfterFilter}
                      removeTask={removeTask}
                      filterTask={filterTask}
            />
        </div>
    );
}


export default App;
