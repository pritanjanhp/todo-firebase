import React from "react";
import Link from "next/link";
import "../styles/globals.css";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen max-h-screen">
      <h1 className="text-xl">Firebase Todo CRUD</h1>
      <Link href="/signIn">
        <button className="bg-blue-500 text-white-600 text-white rounded-md px-2 py-2 mt-6">
          click here to login / sign up
        </button>
      </Link>
    </div>
  );
};

export default page;
