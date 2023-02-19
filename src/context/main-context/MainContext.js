import { createContext, useState } from "react";

export const MainContext = createContext();

export const Provider = ({ children }) => {
  const [activePath, setActivePath] = useState("blog");
  const [value, setValue] = useState(0);
  const [posts, setPosts] = useState({
    html: [
      {
        id: 1,
        title: "what is lorem ipsum? 1",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "/what-is-lorem-ipsum-1",
        date: "18.02.2023",
        tags: ["html", "howto", "webdevelopment"],
        img: "images/posts/html/html1.jpg",
      },
      {
        id: 2,
        title: "what is lorem ipsum? 2",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "/what-is-lorem-ipsum-2",
        date: "18.02.2023",
        tags: ["html", "howto", "webdevelopment"],
        img: "images/posts/html/html1.jpg",
      },
      {
        id: 3,
        title: "what is lorem ipsum? 3",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "/what-is-lorem-ipsum-3",
        date: "18.02.2023",
        tags: ["html", "howto", "webdevelopment"],
        img: "images/posts/html/html1.jpg",
      },
      {
        id: 4,
        title: "what is lorem ipsum? 4",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        url: "/what-is-lorem-ipsum-4",
        date: "18.02.2023",
        tags: ["html", "howto", "webdevelopment"],
        img: "images/posts/html/html1.jpg",
      },
    ],
  });
  const data = {
    posts,
    setPosts,
    value,
    setValue,
    activePath,
    setActivePath,
  };
  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
};
