"use client";

import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import React from "react";

const SignOut = () => {
  const router = useRouter();
  const handleSignout = async () => {
    await signOut(auth);
    router.push("/");
  };
  return (
    <div>
      <button onClick={handleSignout}>sign out</button>
    </div>
  );
};

export default SignOut;
