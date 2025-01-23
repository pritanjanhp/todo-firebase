"use client";

import useAuth from "../../component/hooks/useAuth";
import FirebaseForm from "../signIn/SignIn";

const Layout = ({ children }: { children: React.ReactElement }) => {
  const isLoggedIn = useAuth();
  return (
    <div>
      {isLoggedIn
        ? <div>
            <h2 className="text-xl italic flex flex-col items-center justify-center">
              {/* Not logged in */}
            </h2>
            {children}
          </div>
        : <div>
            <h1 className="text-xl italic flex flex-col items-center justify-center ">
              sign in
            </h1>
            <FirebaseForm />
          </div>}
    </div>
  );
};

export default Layout;
