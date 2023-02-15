import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

export default function MainMenu() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="mainmenu-main mt-[8%]">
        <Tabs
          className=" w-[90%] mx-auto"
          value={value}
          onChange={handleChange}
          aria-label="icon position tabs example"
        >
          <Tab
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
