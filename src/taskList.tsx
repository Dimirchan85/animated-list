import React, {useMemo} from 'react';
import {addTask, removeTask} from "./stateManager/reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./stateManager/store";
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import './taskList.css'
import {throttle} from "./utils";

const TaskList = () => {

    const dispatch= useDispatch();
    const { tasks } = useSelector((state: RootState)=> state.tasks)

    const throttled = useMemo(()=>{
        const run = ()=> dispatch(addTask());
        return throttle(run, 500);
    },[dispatch])
    const addHandler = () => throttled();
    const removeHandler = ()=> dispatch(removeTask());

    return (
        <div className='list-container'>
            <button onClick={addHandler}>ADD</button>
            <button onClick={removeHandler}>REMOVE</button>
            <TransitionGroup className='tasks-container'>
            {tasks.map(task=> {
                   return (
                       <CSSTransition key={task}
                                      timeout={500}
                                      classNames='task-mask'>
                            <div className='task'
                                 style={{backgroundColor: '#' + task}}
                                 key={task}/>
                        </CSSTransition>
                   )
                }
            )}
            </TransitionGroup>
        </div>
    );
};

export default TaskList;