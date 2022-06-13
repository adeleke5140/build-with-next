import Todo from './Todo'
import Form from './Form'
import FilterButton from './FilterButton'

interface Todo{
    id: string
    name: string
    completed: boolean
}

interface TasksProps {
    tasks: Todo[]
}

const App = (props: TasksProps) => {
    const taskList = props.tasks?.map(task => (
        <Todo id={task.id} name={task.name} completed={task.completed} key={task.id}/>
    ))
    
    return(
        <div className="todoapp stack-large">
            <h1>TodoMatic</h1>
            <Form/>
             <div className="filters btn-group stack-exception">
                <FilterButton/>
                <FilterButton/>
                <FilterButton/>
            </div>
            <h2 id="list-heading">
                3 tasks remaining
            </h2>
            <ul role="list" className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
                {taskList}
            </ul>
        </div>
    )
}


export default App