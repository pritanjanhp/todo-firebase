"use client";

import React from "react";
import AddTodo from "./compoents/AddTodo";
import SignOut from "../signIn/SignOut";
import TodoList from "./compoents/TodoList";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center max-h-screen min-h-screen gap-y-3">
      <SignOut />
      {/* <h2 className="text-xl">to do page</h2> */}
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default page;
