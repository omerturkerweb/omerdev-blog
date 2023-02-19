import { useContext } from "react";
import { MainContext } from "../../context/main-context/MainContext";
export default function Tailwind() {
  const { value, setValue } = useContext(MainContext);
  setValue(6);
  return <div>tailwind burası</div>;
}
