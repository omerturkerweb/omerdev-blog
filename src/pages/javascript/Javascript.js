import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
export default function Javascript() {
  const { value, setValue } = useContext(MainContext);
  setValue(3);
  return <div>Javascript</div>;
}
