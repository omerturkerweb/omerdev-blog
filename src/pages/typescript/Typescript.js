import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
export default function Typescript() {
  const { value, setValue } = useContext(MainContext);
  setValue(5);
  return <div>Typescript burası</div>;
}
