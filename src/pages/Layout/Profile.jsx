import SocialsCard from "../../components/icon-sets/SocialsCard";
import {
  FcGlobe,
  FcMultipleDevices,
  FcInfo,
  FcSms,
  FcLeftDown2,
} from "react-icons/fc";

export default function Profile() {
  return (
    <div className="profile-main flex flex-row  shadow-md rounded-xl w-[60%] bg-white mx-auto my-11 h-[60%]">
      <div className="profile-left relative w-[35%] flex flex-col items-center gap-y-12 h-full pt-10 px-4 border border-r-zinc-200">
        <img
          className="mx-auto"
          alt="Ömer TÜRKER"
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "20px",
          }}
          src={require("../../images/selfie/selfie.jpg")}
        ></img>
        <div className="profile-description flex flex-col gap-y-2 ">
          <li className="flex flex-row items-center justify-start text-sm gap-x-1">
            <FcGlobe /> <span> Living in Istanbul.</span>
          </li>
          <li className="flex flex-row items-center justify-start text-sm gap-x-1">
            <FcMultipleDevices /> <span> React Developer </span>
          </li>
          <li className="flex flex-row items-center justify-start text-sm gap-x-1">
            <FcInfo />
            <span>Sharing my article about Development</span>
          </li>
          <li className="flex flex-row items-center justify-start text-sm gap-x-1">
            <FcSms />
            <a href="mailto:omerturkerweb@gmail.com">omerturkerweb@gmail.com</a>
          </li>
          <li className="flex flex-row items-center justify-start text-sm gap-x-1">
            <FcLeftDown2 />
            <span>You can contact me for everything</span>
          </li>
        </div>
        <div className="description-socials-card absolute bottom-1 left-8">
          <SocialsCard />
        </div>
      </div>
      <div className="profile-right w-[60%] h-full flex flex-col items-start justify-center pl-5 gap-y-4">
        <h3 className="font-heading_font_family font-extrabold text-3xl">
          Hi this is <span className="important-text">Ömer Türker</span>
        </h3>
        <span className="font-post_title_ff">
          I am a <span className="important-text">front-end developer</span> . I
          have finally opened my
          <span className="important-text"> blog project</span> project, which
          has been on my mind for a long time. Here you will see the{" "}
          <span className="important-text">articles</span> I have written about
          the technologies I am interested in.
          <br></br>
          <br></br>I use <span className="important-text">React</span> as the{" "}
          <span className="important-text">Javascript</span> framework and{" "}
          <span className="important-text">tailwindcss</span> for styling. I
          will be sharing what I learned in this process here.
          <br></br>
          <br></br>
          You can reach my previous demo projects by clicking on my{" "}
          <span className="important-text underline">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/omerturkerweb"
            >
              github
            </a>
          </span>{" "}
          link and you can use the social media icons to talk to me{" "}
          <span className="important-text">about anything</span> .
        </span>
      </div>
    </div>
  );
}
