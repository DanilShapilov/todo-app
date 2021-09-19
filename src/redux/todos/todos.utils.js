export const addTodo = (todoItems, itemToAdd) => {

  return [...todoItems, { ...itemToAdd, quantity: 1 }]
}

export const removeTodo = (todoItems, todoItemToRemove) => {
  return todoItems.filter(todoItem => todoItem.id !== todoItemToRemove.id)
}