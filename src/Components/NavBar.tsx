import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#5C4033" }}>
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Home
          </Typography>
          <Box sx={{ marginLeft: 2, marginRight: 10 }}>
            <Typography
              variant="h6"
              color="inherit"
              sx={{ textDecoration: "none" }}
              component={Link}
              to="/add-product"
            >
              Add Product
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            edge="end"
            aria-label="favoutite"
            style={{ color: "#FFC0CB" }}
          >
            <FavoriteIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
