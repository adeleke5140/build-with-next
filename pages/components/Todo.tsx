interface Name{
    name: string
    completed: boolean
    id: string
}

const Todo = (props: Name) => {
    return(
        <li className="todo stack-small">
            <div className="c-cb">
                <input id={props.id} type="checkbox" defaultChecked={props.completed} />
                <label className="todo-label" htmlFor={props.id}>{props.name}</label>
            </div>
            <div className="btn-group">
                <button className="btn">Edit <span className="visually-hidden">{props.name}</span></button>
                <button className="btn btn__danger">Delete<span className="visually-hidden">{props.name}</span></button>
            </div>
        </li>
    )
}

export default Todo