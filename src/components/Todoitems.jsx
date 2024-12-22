import TodoItem from "./TodoItem";
import css from "./Todoitems.module.css";


const Todoitems = ({todoItems,onDelete}) => {
  return (
    <div className={css.itemsContainer}>
      {todoItems.map(item => <TodoItem key ={item.name}itemName={item.name} itemDate={item.date} onDelete={onDelete}/>)}
      
    </div>
  );
};
export default Todoitems;
