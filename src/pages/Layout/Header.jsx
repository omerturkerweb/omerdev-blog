import { Autocomplete, TextField } from "@mui/material";
import SelfieLogo from "../../components/SelfieLogo";
import SocialsCard from "../../components/SocialsCard";

export default function Header() {
  const postTitles = ["JavaScript", "PHP", "HTML"];
  return (
    <>
      <div className="header-main fixed w-full z-10  top-0 bg-header_main_light shadow-xl py-3">
        <div className="header-main-container w-3/4 mx-auto flex flex-row items-center justify-center gap-x-60">
          <div className="header-main-container-profile flex flex-row items-center justify-center gap-x-2 p-3 transition-all duration-300 border border-transparent hover:border hover:border-transparent_black cursor-pointer rounded-xl">
            <SelfieLogo />
            <div className="header-main-container-profile-description">
              <h3 className="text-xs font-semibold tracking-wider">
                ÖMER TÜRKER
              </h3>
              <span className="text-xs whitespace-nowrap">
                Front End Developer
              </span>
            </div>
          </div>

          <div className="header-main-container-search">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={postTitles}
              sx={{ width: 400 }}
              renderInput={(params) => <TextField {...params} label="Search" />}
            />
          </div>
          <SocialsCard />
        </div>
      </div>
    </>
  );
}
