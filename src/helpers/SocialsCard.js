import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";

export default function SocialsCard() {
  return (
    <>
      <div className="social-icons whitespace-nowrap">
        <a
          href="https://twitter.com/omerturkerweb"
          className="twitter-icon"
          target="_blank"
        >
          <IconButton
            color="primary"
            title="Twitter - Ömer Türker"
            aria-label="Twitter-Ömer Türker"
          >
            <TwitterIcon color="primary" />
          </IconButton>
        </a>
        <a
          href="https://www.instagram.com/omerturker.dev"
          className="instagram-icon"
          target="_blank"
        >
          <IconButton
            color="error"
            title="Instagram - Ömer Türker"
            aria-label="Instagram-Ömer Türker"
          >
            <InstagramIcon color="error" />
          </IconButton>
        </a>
        <a
          href="https://github.com/omerturkerweb"
          className="github-icon"
          target="_blank"
        >
          <IconButton
            color="error"
            title="Github - Ömer Türker"
            aria-label="Github-Ömer Türker"
          >
            <GitHubIcon color="warning" />
          </IconButton>
        </a>
        <a
          href="https://www.linkedin.com/in/%C3%B6mer-t%C3%BCrker-44a28124b/"
          className="linkedin-icon"
          target="_blank"
        >
          <IconButton
            color="success"
            title="Linkedin - Ömer Türker"
            aria-label="Linkedin-Ömer Türker"
          >
            <LinkedInIcon color="success" />
          </IconButton>
        </a>
      </div>
    </>
  );
}
