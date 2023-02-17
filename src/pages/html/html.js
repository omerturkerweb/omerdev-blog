import { useContext } from "react";
import { MainContext } from "../../context/MainContext";

export default function Html() {
  const { value, setValue } = useContext(MainContext);
  setValue(1);
  return <h3>burası html divi </h3>;
}
