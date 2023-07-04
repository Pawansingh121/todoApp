import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { AiOutlineEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

const TodoList = ({ setInput, setToggle, setEditId }) => {
  const [items, setItems] = useState([]);
  const q = query(collection(db, "todos"), orderBy("timestamp", "desc"));
  const fetchItems = async () => {
    await getDocs(q).then((data) => {
      const newData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setItems(newData);
    });
  };
  useEffect(() => {
    fetchItems();
  }, [items]);

  const handleEdit = (id) => {
    let editItem = items.find((elm) => {
      return elm.id === id;
    });
    setInput(editItem.input);
    setToggle(true);
    setEditId(editItem.id);
  };

  return (
    <div className="mt-12 flex flex-col items-center gap-4 mb-6 ">
      {items.map((todo) => {
        return (
          <div
            className=" border w-[200px] md:w-[300px] lg:w-[350px] h-auto border-gray-100 bg-gray-200 rounded-md shadow-md flex items-center justify-between  "
            key={todo.id}
          >
            <p className=" capitalize pl-4">{todo.input}</p>
            <div className="flex gap-2 md:gap-4">
              <AiOutlineEdit
                onClick={() => handleEdit(todo.id)}
                className="text-green-700 cursor-pointer"
              />
              <AiFillDelete
                onClick={() => deleteDoc(doc(db, "todos", todo.id))}
                className="text-red-600 cursor-pointer"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
