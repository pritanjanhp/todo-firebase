"use client";

import useAuth from "@/component/hooks/useAuth";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {db} from '@/firebase'
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState<any>([]);
  const auth = useAuth();

  useEffect(
    () => {
      if (!auth) return;
      const todoRef = collection(db, 'users', auth?.uid, 'todos');
      onSnapshot(todoRef, (snapshot) => {
        setTodos(snapshot.docs.map((doc) => ({...doc.data(), id:doc.id})));
      });
    },[auth]
  );

  return (
    <div className="mt-12 flex flex-col items-center">
      <h1>To do List</h1>
      <div className="p-3 min-w-fit w-[350px] ">
      {todos?.map((todo: any) => (
        <TodoItem todo={todo} key={todo.id} authUid={auth?.uid}/>
        // <div className="flex flex-col  gap-3 rounded-md">
        //   <h1 className="border-none border border-b-4 flex flex-col p-2 gap-3 rounded-md">{todo.newTodos}</h1>
        // </div>
      ))}</div>
    </div>
  )
};

export default TodoList;
