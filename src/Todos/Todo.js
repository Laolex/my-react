import React, { useState } from "react";
import styles from "./Todos.module.css";
import List from "./List";
import Alert from "./Alert";

function Todo() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, type: "", msg: "" });

  return (
    <div>
      <section className={styles.sectonCenter}>
        <div className={styles.groceryContainer}>
          <List />
          <button className={styles.clearBtn}>clear items</button>
        </div>
      </section>
    </div>
  );
}

export default Todo;
