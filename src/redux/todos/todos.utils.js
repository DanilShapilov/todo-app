import { v4 as uuidv4 } from "uuid"

class Todo {
  constructor(text) {
    this.id = uuidv4()
    this.text = text.trim()
    this.isDone = false
  }
}

export const addTodo = (todoItems, newItemText) => {

  return [...todoItems, new Todo(newItemText)]
}

export const removeTodo = (todoItems, todoItemToRemove) => {
  return todoItems.filter(todoItem => todoItem.id !== todoItemToRemove.id)
}

export const updateTodo = (todoItems, todoItemToUpdate) => {
  return todoItems
    .map(todoItem => (
      todoItem.id === todoItemToUpdate.id
        ? { ...todoItem, text: todoItemToUpdate.text.trim() }
        : todoItem
    ))
}

export const toggleTodo = (todoItems, todoItemToCheck) => {
  return todoItems
    .map(todoItem => (
      todoItem.id === todoItemToCheck.id
        ? { ...todoItem, isDone: !todoItem.isDone }
        : todoItem
    ))
}