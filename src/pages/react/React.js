import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
export default function React() {
  const { vlaue, setValue } = useContext(MainContext);
  setValue(4);
  return <div>React kısmı burası</div>;
}
