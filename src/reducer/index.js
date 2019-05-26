const initState = {
    todos: [
      { id: 0, text: 'have breakfast' },
      { id: 1, text: 'pickup the kids' },
      { id: 2, text: 'have lunch' },
    ],
    currentId: 2
  }
  
  
  const todoReducer = (state = initState , action) => {
    // 由 action 的 type 讓 reducer 判斷該執行哪個 action
    switch (action.type) {
      case 'CREATE_TODO':
        const id = state.currentId + 1
        return Object.assign({}, state, {
          todos: [
            ...state.todos,
            {
              text: action.text,
              id
            }
          ],
          currentId: id
        })
      case 'REMOVE_TODO':
        return Object.assign({}, state, {
          todos: state.todos.filter(todo => {
            return todo.id !== action.id
          })
        })
        
      // 如果是 action 中都沒有定義的 action ，則直接 return 原有的 state
      default:
        return state
    }
  }
  
  export default todoReducer