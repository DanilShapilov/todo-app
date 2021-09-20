import { v4 as uuidv4 } from "uuid"

export const addTodo = (todoItems, newItemText) => {

  return [...todoItems, { text: newItemText, id: uuidv4() }]
}

export const removeTodo = (todoItems, todoItemToRemove) => {
  return todoItems.filter(todoItem => todoItem.id !== todoItemToRemove.id)
}

export const updateTodo = (todoItems, todoItemToUpdate) => {
  return todoItems
    .map(todoItem => (
      todoItem.id === todoItemToUpdate.id
        ? { ...todoItemToUpdate, text: todoItemToUpdate.text }
        : todoItem
    ))
}