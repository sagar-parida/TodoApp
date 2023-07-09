import React, { useEffect, useState } from 'react'

const Todo = ({ userId }) => {

    const [todos, setTodods] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/todo?userId=${userId}`, {
        })
            .then(res => res.json())
            .then(res => {
                setTodods(res)
            })
            .catch(err => console.log(err))
    }, [])
    console.log(todos)
    return (
        <div>
            <h1>Todos</h1>
            {
                todos.length
                    ? <div>
                        {
                            todos.map(item => {
                                return <div key={item._id}>
                                    <p>TaskName: {item.taskName}</p>
                                    <input type='checkbox' checked={item.isCompleted} />
                                </div>
                            })
                        }
                    </div>
                    : <div>
                        <p>You have no todos. You can add one here.</p>
                    </div>
            }
        </div>
    )
}

export default Todo