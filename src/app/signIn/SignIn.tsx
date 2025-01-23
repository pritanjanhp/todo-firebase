"use client";

import { auth } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import Link from "next/link";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log("Signed in:", userCredential.user);
        setLoading(false);
      })
      .catch(error => {
        console.log("Error while signing in:", error.message);
        setError(error.message);
      });
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log("User has signed up:", userCredential.user);
        setLoading(false);
      })
      .catch(error => {
        console.log("Error while signing up:", error.message);
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <form
      className="flex flex-col justify-center items-center max-h-screen min-h-screen gap-y-3"
      onSubmit={handleSignIn}
    >
      <input
        className="border border-blue-600 p-2 m-2 rounded-md min-w-[15rem]"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      />

      <input
        className="border border-blue-600 p-2 m-2 rounded-md min-w-[15rem]"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
      />

      {/* <Link href="/signIn">
        <button className="bg-blue-500 text-white-600 text-white rounded-md px-2 py-2 mt-6">
          click here to login / sign up
        </button>
      </Link> */}

      <Link href="/todo-app">
        <button
          className="min-w-[15rem] bg-blue-400 rounded-md p-2 m-2"
          type="submit"
        >
          Login
        </button>
      </Link>

      {error &&
        <p className="text-red-500">
          {!error ? "you are correct" : error}
        </p>}

      <button
        className="min-w-[15rem] bg-blue-400 rounded-md p-2 m-2"
        type="button"
        onClick={handleSignUp}
      >
        Sign Up
      </button>

      <p>
        {loading ? "sigining in..." : `some error ${error}`}{" "}
      </p>

      {/*  <button type="button" onClick={() => signOut(auth)}>
        sign out
      </button> */}
    </form>
  );
};

export default SignIn;
