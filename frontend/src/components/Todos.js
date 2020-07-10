import React from 'react'
import './Todos.css'

const Todos = ({ todos, checkTodo, deleteTodo }) => {
  const handleCheck = (id) => {
    checkTodo({ id })
  }

  return (
    <div className="todo-wrap">
      {todos.map((t) => (
        <div className="item-todo" key={t.id}>
          <span className="wrap-content">
            <input
              type="checkbox"
              className="checkbox-content"
              checked={t.isDone ? true : false}
              onChange={() => handleCheck(t.id)}
            />
            <div
              className="todo-content"
              style={
                t.isDone
                  ? { textDecoration: 'line-through' }
                  : { textDecoration: 'none' }
              }
            >
              {t.content}
            </div>
            <div className="time-content">
              {t.startTime} - {t.endTime}
            </div>
            <div className="button-content">
              <button
                type="button"
                className="button-delete"
                onClick={() => deleteTodo({ id: t.id })}
              >
                Delete
              </button>
            </div>
          </span>
        </div>
      ))}
    </div>
  )
}

export default Todos
