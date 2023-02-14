import { createContext, useState } from "react";

export const MainContext = createContext();

const Provider = ({ children }) => {
  const [posts, setPosts] = useState();

  const data = {
    posts,
    setPosts,
  };
  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};
