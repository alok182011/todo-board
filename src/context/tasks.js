import React, { useReducer, createContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todo: [],
  wip: [],
  done: [],
};

const TaskContext = createContext({
  todo: [],
  wip: [],
  done: [],
  addtodo: (task, desc) => {},
  removetodo: (taskId) => {},
  addwip: (task, desc) => {},
  adddone: (task, desc) => {},
});

function taskReducer(state, action) {
  switch (action.type) {
    case "ADDTODO":
      return {
        ...state,
        todo: [action.payload, ...state.todo],
      };
    case "REMOVETODO":
      return {
        ...state,
        todo: state.todo.filter((task) => task.id !== action.payload),
      };
    case "EDITTODO": {
      const index = state.todo.findIndex(
        (todo) => todo.id === action.payload[0]
      );
      const newArray = [...state.todo];
      newArray[index].task = action.payload[1];
      newArray[index].desc = action.payload[2];
      return {
        ...state,
        todo: newArray,
      };
    }

    case "ADDWIP":
      return {
        ...state,
        wip: [action.payload, ...state.wip],
      };
    case "REMOVEWIP":
      return {
        ...state,
        wip: state.wip.filter((task) => task.id !== action.payload),
      };
    case "EDITWIP": {
      const index = state.wip.findIndex((wip) => wip.id === action.payload[0]);
      const newArray = [...state.wip];
      newArray[index].task = action.payload[1];
      newArray[index].desc = action.payload[2];
      return {
        ...state,
        wip: newArray,
      };
    }

    case "ADDDONE":
      return {
        ...state,
        done: [action.payload, ...state.done],
      };
    case "REMOVEDONE":
      return {
        ...state,
        done: state.done.filter((task) => task.id !== action.payload),
      };
    case "EDITDONE": {
      const index = state.done.findIndex(
        (done) => done.id === action.payload[0]
      );
      const newArray = [...state.done];
      newArray[index].task = action.payload[1];
      newArray[index].desc = action.payload[2];
      return {
        ...state,
        done: newArray,
      };
    }

    default:
      return state;
  }
}

if (initialState.todo.length === 0) {
  initialState.todo = JSON.parse(localStorage.getItem("todo"));
}
if (initialState.wip.length === 0) {
  initialState.wip = JSON.parse(localStorage.getItem("wip"));
}
if (initialState.done.length === 0) {
  initialState.done = JSON.parse(localStorage.getItem("done"));
}

function TaskProvider(props) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  useEffect(() => {
    if (state.todo !== null && state.todo.length >= 0) {
      localStorage.setItem("todo", JSON.stringify(state.todo));
    }
    if (state.wip !== null && state.wip.length >= 0) {
      localStorage.setItem("wip", JSON.stringify(state.wip));
    }
    if (state.done !== null && state.done.length >= 0) {
      localStorage.setItem("done", JSON.stringify(state.done));
    }
  }, [state.todo, state.wip, state.done]);

  function addtodo(task, desc) {
    let obj = { id: uuidv4(), task: task, desc: desc, status: "todo" };
    dispatch({
      type: "ADDTODO",
      payload: obj,
    });
  }

  function removetodo(taskId) {
    dispatch({
      type: "REMOVETODO",
      payload: taskId,
    });
  }

  function edittodo(taskId, task, desc) {
    const payloads = [taskId, task, desc];
    dispatch({
      type: "EDITTODO",
      payload: payloads,
    });
  }

  function addwip(task, desc) {
    let obj = { id: uuidv4(), task: task, desc: desc, status: "wip" };
    dispatch({
      type: "ADDWIP",
      payload: obj,
    });
  }

  function removewip(taskId) {
    dispatch({
      type: "REMOVEWIP",
      payload: taskId,
    });
  }

  function editwip(taskId, task, desc) {
    const payloads = [taskId, task, desc];
    dispatch({
      type: "EDITWIP",
      payload: payloads,
    });
  }

  function adddone(task, desc) {
    let obj = { id: uuidv4(), task: task, desc: desc, status: "done" };
    dispatch({
      type: "ADDDONE",
      payload: obj,
    });
  }

  function removedone(taskId) {
    dispatch({
      type: "REMOVEDONE",
      payload: taskId,
    });
  }

  function editdone(taskId, task, desc) {
    const payloads = [taskId, task, desc];
    dispatch({
      type: "EDITDONE",
      payload: payloads,
    });
  }

  return (
    <TaskContext.Provider
      value={{
        todo: state.todo,
        wip: state.wip,
        done: state.done,
        addtodo,
        removetodo,
        edittodo,
        addwip,
        removewip,
        editwip,
        adddone,
        removedone,
        editdone,
      }}
      {...props}
    />
  );
}

export { TaskContext, TaskProvider };
