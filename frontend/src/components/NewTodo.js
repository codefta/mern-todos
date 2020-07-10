import React, { useState } from 'react'
import './NewTodo.css'

const NewTodo = ({ addTodo }) => {
  const [content, setContent] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')

  const submit = (event) => {
    event.preventDefault()
    addTodo({
      content,
      start,
      end,
    })
    setContent('')
    setStart('')
    setEnd('')
  }

  return (
    <div className="new-wrap">
      <form className="input-wrap" onSubmit={submit}>
        <input
          type="text"
          placeholder="What will you do?"
          className="input-todo"
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
        <input
          type="text"
          className="input-time"
          placeholder="Start Time"
          value={start}
          onChange={({ target }) => setStart(target.value)}
        />
        <input
          type="text"
          placeholder="End Time"
          className="input-time"
          value={end}
          onChange={({ target }) => setEnd(target.value)}
        />
        <button type="submit" className="button">
          Ok
        </button>
      </form>
    </div>
  )
}

export default NewTodo
