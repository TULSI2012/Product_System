import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
}
export default function ProductCard({ image, title, price }: ProductCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#f4e8e1" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="#6e2f22">
          {title}
        </Typography>
      </CardContent>
      <CardMedia sx={{ height: 250 }} image={image} title={title} />
      <CardContent>
        <Typography variant="h5" color="#6e2f22">
          <span style={{ fontFamily: "fantsy" }}>{`$${price}`}</span>
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button size="medium">Learn More</Button>
        <IconButton
          edge="end"
          aria-label="favoutite"
          style={{ color: isFavorited ? "#ff0252" : "#FFC0CB" }}
          onClick={handleFavoriteClick}
        >
          <FavoriteIcon sx={{ fontSize: 32 }} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
//<Button size="medium">Favourite</Button>
