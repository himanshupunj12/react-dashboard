import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { tokens } from "../theme";

const Menu = ({ menu, menuItems }) => {
  const {
    palette: { mode },
  } = useTheme();
  const colors = tokens(mode);
  return (
    <Box>
      <Typography sx={{ fontSize: "1rem" }}>{menu}</Typography>
      <List sx={{ padding: "0" }}>
        {menuItems.map(({ icon, text, link }) => {
          const Icon = icon;
          return (
            <ListItem disablePadding key={text}>
              <ListItemButton
                component={NavLink}
                to={link}
                sx={{ "&.active": { color: colors.indigoAccent[500] } }}
              >
                <ListItemIcon
                  sx={{ minWidth: "auto", mr: "1.2rem", color: "inherit" }}
                >
                  <Icon sx={{ "&": { fontSize: "1.2rem !important" } }} />
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{ "& span": { fontSize: "1.1rem !important" } }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Menu;
