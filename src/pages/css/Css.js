import { useContext } from "react";
import { MainContext } from "../../context/MainContext";

export default function Css() {
  const { value, setValue } = useContext(MainContext);
  setValue(2);
  return <div>Css</div>;
}
