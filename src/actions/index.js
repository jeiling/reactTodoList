
export const createTodo = text => {
  return {
    type: 'CREATE_TODO',
    text: text,
  }
}

export const removeTodo = id => {
  return {
    type: 'REMOVE_TODO',
    id
  }
}