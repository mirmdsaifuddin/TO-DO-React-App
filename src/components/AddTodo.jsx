import { useState, useRef } from "react";
import { BiAddToQueue } from "react-icons/bi";

function AddTodo({ newTodoItem }) {
  // let [todoName, setTodoName] = useState("");
  // let [todoDate, setTodoDate] = useState("");

  let todaNameElement = useRef();
  let todoDateElement = useRef();

  let handledAddButton = (event) => {
    event.preventDefault();
    let todoName = todaNameElement.current.value;
    let todoDate = todoDateElement.current.value;
    todaNameElement.current.value="";
    todoDateElement.current.value="";
    newTodoItem(todoName, todoDate);
  };

  return (
    <div className="container text-center">
      <form className="row Kg-row" onSubmit={handledAddButton}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter TODO Here"
            ref={todaNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={todoDateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success Kg-button">
            <BiAddToQueue />
          </button>
        </div>
      </form>
    </div>
  );
}
//4.26.40
export default AddTodo;
