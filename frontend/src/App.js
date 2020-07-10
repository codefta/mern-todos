//eslint-disable no-unused-expressions
import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import NewTodo from './components/NewTodo'
import Todos from './components/Todos'
import Footer from './components/Footer'
import todoService from './services/todoService'

const App = () => {
  const [todos, setTodos] = useState(null)

  useEffect(() => {
    todoService.getAll().then((todos) => {
      setTodos(todos)
    })
  }, [])

  if (todos === null) {
    return <div>loading...</div>
  }

  const handleCreate = async ({ content, start, end }) => {
    const todo = {
      content,
      startTime: start,
      endTime: end,
    }

    const newTodo = await todoService.create(todo)
    setTodos(todos.concat(newTodo))
  }

  const handleCheck = async ({ id }) => {
    const todo = todos.find((t) => t.id === id)

    const checkedTodo = {
      ...todo,
      isDone: !todo.isDone,
    }

    const updatedTodo = await todoService.update(checkedTodo, id)

    setTodos(todos.map((t) => (t.id !== id ? t : updatedTodo)))
  }

  const handleDelete = async ({ id }) => {
    const deletedTodo = await todoService.remove(id)

    setTodos(todos.filter((t) => t.id !== id))
  }

  return (
    <div className="container">
      <Header />
      <NewTodo addTodo={handleCreate} />
      <Todos todos={todos} checkTodo={handleCheck} deleteTodo={handleDelete} />
      <Footer />
    </div>
  )
}

export default App
