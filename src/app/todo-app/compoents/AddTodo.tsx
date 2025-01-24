"use client";

import useAuth from "@/component/hooks/useAuth";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import {db} from '@/firebase'
import { IoIosAddCircleOutline } from "react-icons/io";

const AddTodo = () => {
  const [todos, setTodos] = useState<any>([]);
  // console.log(todos);
  // const [loading ,setLoading]= useState<boolean>(false);
  const auth = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todo = (e.currentTarget.todoInput as HTMLInputElement).value;
    // console.log(todo);

    const newTodos = [todo, ...todos];
    const obj = {
      newTodos:todo,
      timestamp : new Date().getTime(),
    }
    setTodos(newTodos);
    e.currentTarget.reset();

    const todoRef = collection(db, 'users', auth?.uid, 'todos');
    // setLoading(true);
    try{
      const docRef = await addDoc(todoRef,obj);
      console.log(docRef)
    }catch(error){
      console.log(error)
    } finally{
      // setLoading(false);
    }
  };
  return (<>
    <form onSubmit={handleSubmit} className="mt-4 flex justify-center">
      <input
        type="text"
        className="border border-blue-500 mt-2 m-3 p-3 rounded-md"
        id="todo-input"
        placeholder="add todo"
        name="todoInput"
      />
      <button
        type="submit"
        className="border border-blue-500 m-3 p-3 rounded-md bg-blue-500 hover:bg-blue-400 hover:italic hover:text-lg text-white"
      >
        <IoIosAddCircleOutline className="text-2xl" />
      </button>
    </form>
    <div className="gap-2">
      
    {/* {todos?.map((todo: string, index: number) => 
      <p key={index} className="flex flex-col  gap-3 rounded-md">
        <h1 className="border-none border border-b-4 flex flex-col p-2 gap-3 rounded-md">{todo}</h1>
        </p>
    )} */}
    </div>
    </>
  );
};

export default AddTodo;
