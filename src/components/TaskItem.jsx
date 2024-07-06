import styled from "styled-components"

const Item = styled.li`
    padding: 10px 20px;
    margin-top: 10px;
    border: 2px solid gainsboro;
`

export default function TaskItem({index, text}){
   return(<Item>
<span>{text}</span>
<span>{index}</span>

    </Item>) 
}