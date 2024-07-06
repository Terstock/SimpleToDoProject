import styled from "styled-components"
import TaskItem from "./TaskItem.jsx"
import { useSelector } from "react-redux"
const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
`


export default function TaskList(){
    const tasks = useSelector(state => state.todo.tasks)
    
    return(<Ul>
        {
        tasks.length === 0 ? <p>No tasks</p> :
        tasks.map((i, t)=> <TaskItem index={i} text={t} key={i}/> )
    }
       
    </Ul>)
}