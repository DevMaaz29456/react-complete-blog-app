import { createContext, useEffect, useState } from "react";
import { URL } from "../url";
import axios from "axios";

export const Usercontext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const res = await axios.get(URL + "/api/auth/refetch", {
        withCredentials: true,
      });
      setUser(res.data); // Set the user state with the fetched data
      console.log(res.data); // Optional: For debugging
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Usercontext.Provider value={{ user, setUser }}>
      {children}
    </Usercontext.Provider>
  );
}
