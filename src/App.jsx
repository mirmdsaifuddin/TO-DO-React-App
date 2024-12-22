import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";
import Todoitems from "./components/Todoitems";
import { useState } from "react";
import welcome from "./components/Welcome";
import Welcome from "./components/Welcome";

function App() {
  let todoItemsmain = [
    {
      name: "Buy Milk",
      date: "4/10/2024",
    },
    {
      name: "Go To College",
      date: "5/10/2024",
    },
    {
      name: "Go To Gym",
      date: "6/10/2024",
    },
  ];

  let [todoItems, setTodoItems] = useState(todoItemsmain);

  let handledNewItem = (todoName, todoDate) => {
    setTodoItems((currVal) => [
      ...currVal,
      {
        name: todoName,
        date: todoDate,
      },
    ]);
  };

  const handledDelete = (todoItemsName) => {
    let newItems = todoItems.filter((item) => item.name !== todoItemsName);
    setTodoItems(newItems);
    //console.log(`delete ${todoItemsName}`)
  };

  return (
    <center className="TODO-container">
      <AppName />
      <AddTodo newTodoItem={handledNewItem} />
      {todoItems.length === 0 && <Welcome></Welcome>}
      <Todoitems todoItems={todoItems} onDelete={handledDelete}></Todoitems>
    </center>
  );
}

export default App;
