import { MdDelete } from "react-icons/md";

function TodoItem({ onDelete,itemName, itemDate }) {

  // let itemName="Buy Milk";
  // let itemDate='4/10/2024';
  return (
    <div className ="container">
      <div className="row Kg-row">
        <div className="col-6">{itemName}</div>
        <div className="col-4">{itemDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger Kg-button" onClick={()=>onDelete(itemName)}>
          <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
