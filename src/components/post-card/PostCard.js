import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function PostCard({ title, description, url, date, img, tags }) {
  return (
    <div className="post-card group">
      <Card sx={{ maxWidth: 350 }}>
        <CardActionArea>
          <CardMedia
            className=" transition-all duration-500 group-hover:scale-[1.07]"
            component="img"
            height="150"
            image={`${require(`../../${img}`)}`}
          />
          <CardContent>
            <div className="post-card-content flex flex-col justify-center items-start gap-y-3 overflow-hidden">
              <div className="post-card-tags  -ml-1">
                {tags.map((tag, index) => (
                  <span
                    className="text-sm mx-1 font-post_description_ff  p-1 bg-important_bg_blue rounded-md"
                    key={index}
                  >
                    {`#${tag}`}
                  </span>
                ))}
              </div>
              <h2 className="post-card-title font-heading_font_family font-extrabold text-black text-xl]">
                {title}
              </h2>
              <span className="post-card-description text-[13px]">
                {description.length > 200
                  ? `${description.slice(0, 200)}...`
                  : description}
              </span>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
