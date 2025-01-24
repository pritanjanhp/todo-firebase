"use client";

import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const demo = onAuthStateChanged(auth, (user: any) => {
      if (user) {
        // console.log("user", user);
        setUser(user);
      } else {
        // console.log("no user");
        setUser(null);
      }
    });
    return () => demo();
  }, []);
  return user;
};

export default useAuth;
