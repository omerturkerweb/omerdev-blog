import { useContext, useEffect } from "react";
import { FcRightDown2 } from "react-icons/fc";
import Slider from "react-slick";
import PostCard from "../../components/post-card/PostCard";
import { MainContext } from "../../context/main-context/MainContext";

export default function Html() {
  const { setValue, setActivePath } = useContext(MainContext);

  const posts = useContext(MainContext).posts.html;
  console.log(posts);
  useEffect(() => {
    setValue(1);
    setActivePath("html");
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="html-header flex flex-col items-start justify-center ml-20">
        <h1 className="font-heading_font_family text-2xl font-semibold  !my-5 bg-orange-50">
          HTML
        </h1>
        <span className="flex flex-row items-center justify-centerfont-post_description_ff text-base tracking-wide">
          you can find my articles containing
          <span className="bg-orange-100 mx-1 rounded-md">html</span>
          and the products I have developed below <FcRightDown2 />
        </span>
      </div>
      <div className="html-posts w-[70%] ml-[5%] mt-[1%]  ">
        <div className="html-posts-slider">
          <Slider {...settings}>
            {posts &&
              posts.map((post, index) => {
                return (
                  <PostCard
                    key={index}
                    title={post.title}
                    description={post.description}
                    url={post.url}
                    date={post.date}
                    img={post.img}
                    tags={post.tags}
                  />
                );
              })}
          </Slider>
        </div>
      </div>
    </>
  );
}
