import React from "react";
import styles from "./todoitem.module.css";

function Todoitem() {
  return (
    <div className={styles.todos}>
     <h1>Todo App</h1>
      <div className={styles.Header}>
        <div className={styles.input_container}>
          <div className={styles.circle}></div>
          <form>  
            <input type="text" placeholder="Create a new todo ..." /><br></br>
            <input type="checkbox" name="todo" value="todo"/>
            <input type ="text" placeholder="Todo created" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Todoitem;
