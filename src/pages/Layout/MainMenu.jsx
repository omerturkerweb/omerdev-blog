import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { MainContext } from "../../context/MainContext";

export default function MainMenu() {
  const { value, setValue } = useContext(MainContext);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigationNavLink = (to) => {
    const navLinkToNavigate = document.querySelector(`#to-${to}`);
    navLinkToNavigate.click();
  };
  return (
    <>
      <NavLink id="to-home" to="/" />
      <NavLink id="to-html" to="/html" />
      <NavLink id="to-css" to="/css" />
      <NavLink id="to-javascript" to="/javascript" />
      <NavLink id="to-react" to="/react" />
      <NavLink id="to-typescript" to="/typescript" />
      <NavLink id="to-tailwind" to="/tailwind" />
      <NavLink id="to-bootstrap" to="/bootstrap" />
      <NavLink id="to-more" to="/more" />
      <div className="mainmenu-main mt-[8%]">
        <Tabs
          className=" w-[90%] mx-auto"
          value={value}
          onChange={handleChange}
          aria-label="icon position tabs example"
        >
          <Tab
            onClick={() => {
              navigationNavLink("home");
            }}
            className="mainmenu-icon-label"
            icon={
              <img
                alt="about Ömer Türker"
                className="mainmenu-title-icon"
                src={require("../../images/title-icons/profile.png")}
              />
            }
            label="ABOUT ME"
            iconPosition="start"
          />

          <Tab
            onClick={() => {
              navigationNavLink("html");
            }}
            disabled={false}
            className="mainmenu-icon-label"
            icon={
              <img
                alt="HTML5"
                className="mainmenu-title-icon"
                src={require("../../images/title-icons/html.png")}
              />
            }
            label="HTML5"
            iconPosition="start"
          />

          <Tab
            onClick={() => {
              navigationNavLink("css");
            }}
            className="mainmenu-icon-label"
            icon={
              <img
                alt="CSS3"
                className="mainmenu-title-icon"
                src={require("../../images/title-icons/css.png")}
              />
            }
            label="CSS3"
            iconPosition="start"
          />

          <Tab
            onClick={() => {
              navigationNavLink("javascript");
            }}
            className="mainmenu-icon-label"
            icon={
              <img
                alt="JAVASCRIPT"
                className="mainmenu-title-icon"
                src={require("../../images/title-icons/javascript.png")}
              />
            }
            label="JAVASCRIPT"
            iconPosition="start"
          />

          <Tab
            onClick={() => {
              navigationNavLink("react");
            }}
            className="mainmenu-icon-label"
            icon={
              <img
                alt="REACT"
                className="mainmenu-title-icon"
                src={require("../../images/title-icons/react.png")}
              />
            }
            label="REACT"
            iconPosition="start"
          />
          <Tab
            onClick={() => {
              navigationNavLink("typescript");
            }}
            className="mainmenu-icon-label"
            icon={
              <img
                alt="TYPESCRIPT"
                className="mainmenu-title-icon"
                src={require("../../images/title-icons/typescript.png")}
              />
            }
            label="TYPESCRIPT"
            iconPosition="start"
          />
          <Tab
            onClick={() => {
              navigationNavLink("tailwind");
            }}
            className="mainmenu-icon-label"
            icon={
              <img
                alt="TAILWIND"
                className="mainmenu-title-icon"
                src={require("../../images/title-icons/tailwind.png")}
              />
            }
            label="TAILWIND"
            iconPosition="start"
          />
          <Tab
            onClick={() => {
              navigationNavLink("bootstrap");
            }}
            className="mainmenu-icon-label"
            icon={
              <img
                alt="BOOTSTRAP"
                className="mainmenu-title-icon"
                src={require("../../images/title-icons/bootstrap.png")}
              />
            }
            label="BOOTSTRAP"
            iconPosition="start"
          />
          <Tab
            onClick={() => {
              navigationNavLink("more");
            }}
            className="mainmenu-icon-label"
            icon={
              <img
                alt="OTHER PROGRAMMING SUBJECTS"
                className="mainmenu-title-icon"
                src={require("../../images/title-icons/other.png")}
              />
            }
            label="MORE"
            iconPosition="start"
          />
        </Tabs>
      </div>
    </>
  );
}
