const initialState = {
  todoList: [
    {
      id: 1,
      title: "todo 1",
      description: "sample to do",
      checklist: [
        { id: 1, title: "check 1", isDone: true },
        { id: 2, title: "check 2", isDone: false },
        { id: 3, title: "check 3", isDone: false },
      ],
    },
  ],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "change_isDone_status":
      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item.id === action.payload.toDoID
            ? {
                ...item,
                checklist: item.checklist.map((checkItem) =>
                  checkItem.id === action.payload.checkId
                    ? { ...checkItem, isDone: !checkItem.isDone }
                    : checkItem
                ),
              }
            : item
        ),
      };
    case "reset_todo":
      return initialState;
    case "clean_todo":
      return { ...state, todoList: [] };
    case "remove_todo":
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== action.payload),
      };
    case "add_todo":
      return { ...state, todoList: [...state.todoList, action.payload] };
    default:
      return state;
  }
}

export default todoReducer;
