import { createContext, useState } from "react";

export const MainContext = createContext();

export const Provider = ({ children }) => {
  const [posts, setPosts] = useState();
  const [value, setValue] = useState(0);
  const data = {
    posts,
    setPosts,
    value,
    setValue,
  };
  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};
