import { Avatar } from "@mui/material";

export default function SelfieLogo() {
  return (
    <Avatar
      variant="rounded"
      alt="Ömer Türker"
      src={require("../../images/selfie/selfie.jpg")}
    />
  );
}
