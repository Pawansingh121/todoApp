import React, { useState } from "react";
import TodoList from "./TodoList";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
const InputTodo = () => {
  const [input, setInput] = useState("");
  const [toggle, setToggle] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleClick = async () => {
    if (!input) {
      alert("Please Fill...");
    } else if (input && toggle) {
      setToggle(false);
      setEditId(null);
      await updateDoc(doc(db, "todos", editId), { input: input });
      setInput("");
    } else {
      await addDoc(collection(db, "todos"), {
        input,
        timestamp: serverTimestamp(),
      });
      setInput("");
    }
  };
  return (
    <div className="flex justify-center">
      <div className="border h-[75vh] w-[340px] md:w-[600px] mt-6 bg-white rounded-2xl shadow-2xl overflow-auto ">
        <div className="flex flex-col items-center justify-center pt-16 gap-4">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            className="capitalize border w-[200px] md:w-[300px] lg:w-[400px] bg-gray-100 font-poppins rounded-sm shadow-2xl outline-blue-500 outline-8 outline-offset-2 text-sm pl-2"
            type="text"
            placeholder="Add Your Task..."
          />
          <button
            onClick={handleClick}
            className="border bg-blue-500 text-white px-3  md:px-4 font-poppins rounded-md shadow-2xl hover:bg-blue-700"
          >
            {toggle ? "EDIT" : "ADD"}
          </button>
        </div>
        <TodoList
          input={input}
          setInput={setInput}
          setToggle={setToggle}
          editId={editId}
          setEditId={setEditId}
        />
      </div>
    </div>
  );
};

export default InputTodo;
