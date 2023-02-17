import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
export default function Bootstrap() {
  const { value, setValue } = useContext(MainContext);
  setValue(7);
  return <div>Bootstrap</div>;
}
