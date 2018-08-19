const reminders = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(reminder =>
        (reminder.id === action.id)
          ? {...reminder, completed: !reminder.completed}
          : reminder
      )
    default:
      return state
  }
}

export default reminders
