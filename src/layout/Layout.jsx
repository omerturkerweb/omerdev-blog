import { Outlet } from "react-router-dom";
import Header from "../pages/Layout/Header";
import MainMenu from "../pages/Layout/MainMenu";

export default function Layout() {
  return (
    <>
      <Header />
      <MainMenu />
      <Outlet />
    </>
  );
}
