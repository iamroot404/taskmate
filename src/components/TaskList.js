import { useState } from 'react';
import  TaskCard  from './TaskCard';
import  AlertCard  from './AlertCard';

export const TaskList = ({info}) => {

    const [tasks, setTasks]  = useState([
       {id:1, name:"play aviator", completed: false},
       {id:2, name:"Play React", completed: false}, 
       {id:3, name:"Study Node", completed: false}
      ]);
    
    const [show, setShow] = useState(true);
    
    function handleDelete(id){
    setTasks(tasks.filter(task => task.id !== id))
    }

  return (
    <div>
      <h1>Task List</h1>
     <ul>
      <button onClick={()=> setShow(!show)} >Toggle</button>
      { show && tasks.map((task)=>(
        <TaskCard key={task.id} info={info} task={task} handleDelete={handleDelete} />
      )) }
    
     </ul>
     <AlertCard result="success">
        <p className='title'>Lorem sns cvv</p>
        <p className='description'>Lorem sns cvvsf sfg</p>
     </AlertCard>

     <AlertCard result="warning">
        <p className='title'>Lorem sns cvv</p>
        <p className='description'>Lorem sns cvvsf sfg</p>
     </AlertCard>
     
    </div>
  )
}

