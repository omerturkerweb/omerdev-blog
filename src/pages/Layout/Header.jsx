import { Autocomplete, TextField } from "@mui/material";
import SelfieLogo from "../../helpers/SelfieLogo";
import SocialsCard from "../../helpers/SocialsCard";

export default function Header() {
  const postTitles = ["JavaScript", "PHP", "HTML"];
  return (
    <>
      <div className="header-main fixed w-full bg-header_main_light shadow-xl py-3">
        <div className="header-main-container w-3/4 mx-auto flex flex-row items-center justify-center gap-x-60">
          <div className="header-main-container-profile flex flex-row items-center justify-center gap-x-2">
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
