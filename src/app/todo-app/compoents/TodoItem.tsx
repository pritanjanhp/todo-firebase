import { db } from "@/firebase";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdArrowOutward, MdDeleteOutline } from "react-icons/md";

// type Todo = {
//   id: number;
//   complete: boolean;
//   newTodos: string;
//   timestamp: number;
// };

interface TodoItemProps {
  todo: any;
  authUid: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, authUid }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [newTodo, setNewTodo] = useState(todo.newTodos);

  const handleCheckBoc = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    const todoData = doc(db, "users", authUid, "todos", todo.id);
    await updateDoc(todoData, { complete: checked });
    // console.log(checked, todoData);
  };

  const handleEdit = async () => {
    if (isEdit && newTodo !== todo.newTodos) {
      const todoData = doc(db, "users", authUid, "todos", todo.id);
      await updateDoc(todoData, {
        newTodos: newTodo
      });
    }
    setIsEdit(!isEdit);
  };

  const handleDelete = async () => {
    const todoData = doc(db, "users", authUid, "todos", todo.id);
    await deleteDoc(todoData);
  };

  return (
    <div className="flex justify-evenly items-center space-x-10 gap-5 rounded-md p-3 border border-b-4">
      {/* <h1>{todo.todo}</h1> */}
      <div className="flex gap-4">
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={handleCheckBoc}
        />

        {isEdit
          ? <input
              type="text"
              value={newTodo}
              className="border-b-4 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              onChange={e => setNewTodo(e.target.value)}
            />
          : <h2 className={todo.complete ? "line-through text-gray-400" : ""}>
              {todo.newTodos}{" "}
            </h2>}
      </div>
      <div className="flex gap-3">
        <button
          onClick={handleEdit}
          className="bg-blue-500 text-white px-2 py-1 rounded-md border border-b-3"
          disabled={todo.complete}
        >
          {isEdit ? <MdArrowOutward /> : <CiEdit />}
        </button>
        <button
          className="bg-red-500 text-white px-2 py-1 rounded-md"
          onClick={handleDelete}
        >
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
