import { useContext } from "react";
import { MainContext } from "../../context/main-context/MainContext";
export default function More() {
  const { value, setValue } = useContext(MainContext);
  setValue(8);
  return <div>More burası</div>;
}
