import { useContext } from "react";
import { MainContext } from "../../context/main-context/MainContext";
export default function Notfound() {
  const { value, setValue } = useContext(MainContext);
  setValue(-1);
  return <div>not found burası</div>;
}
